const express = require('express');
const getDatabase = require('./db.js');

const server = express();
const port = 8080;

async function run() {
    try {
        // Connect to the MongoDB database
        const db = await getDatabase();
        const movie = await db.collection("movie-data");

        const pipeline1 = [
            // Aggregation 1: Count the total number of movies
            { $count: "totalMovies" }
        ];

        const pipeline2 = [
            // Aggregation 2: Group movies by rating and count
            { $group: { _id: "$rated", count: { $sum: 1 } } }
        ];

        const pipeline3 = [
            // Aggregation 3: Filter movies by language
            { $match: { languages: "English" } }
        ];

        const pipeline4 = [
            // Aggregation 4: Sort movies by year in descending order
            { $sort: { year: -1 } }
        ];

        const pipeline5 = [
            // Aggregation 5: Project only title and year of movies
            { $project: { _id: 0, title: 1, year: 1 } }
        ];

        // Define additional pipelines here...

        const pipeline6 = [
            // Aggregation 6: Group movies by genres and count
            { $group: { _id: "$genres", count: { $sum: 1 } } }
        ];

        const pipeline7 = [
            // Aggregation 7: Filter genres with more than one movie
            { $match: { count: { $gt: 1 } } }
        ];

        const pipeline8 = [
            // Aggregation 8: Unwind cast array
            { $unwind: "$cast" }
        ];

        const pipeline9 = [
            // Aggregation 9: Group movies by cast and count
            { $group: { _id: "$cast", count: { $sum: 1 } } }
        ];

        const pipeline10 = [
            // Aggregation 10: Sort cast by the number of appearances
            { $sort: { count: -1 } }
        ];

        const pipeline11 = [
            // Aggregation 11: Limit to top 10 cast members
            { $limit: 10 }
        ];

        const pipeline12 = [
            // Aggregation 12: Project only cast and count
            { $project: { _id: 0, cast: "$_id", count: 1 } }
        ];

        const pipeline13 = [
            // Aggregation 13: Calculate average runtime
            { $group: { _id: null, averageRuntime: { $avg: "$runtime" } } }
        ];

        const pipeline14 = [
            // Aggregation 14: Project only average runtime
            { $project: { _id: 0, averageRuntime: 1 } }
        ];

        const pipeline15 = [
            // Aggregation 15: Group movies by directors and count
            { $group: { _id: "$directors", count: { $sum: 1 } } }
        ];

        const pipeline16 = [
            // Aggregation 16: Sort directors by the number of movies
            { $sort: { count: -1 } }
        ];

        const pipeline17 = [
            // Aggregation 17: Limit to top 5 directors
            { $limit: 5 }
        ];

        const pipeline18 = [
            // Aggregation 18: Project only directors and count
            { $project: { _id: 0, directors: "$_id", count: 1 } }
        ];

        const pipeline19 = [
            // Aggregation 19: Group movies by year and calculate total runtime
            { $group: { _id: "$year", totalRuntime: { $sum: "$runtime" } } }
        ];

        const pipeline20 = [
            // Aggregation 20: Sort years in descending order
            { $sort: { _id: -1 } }
        ];

        const pipelines = [pipeline1, pipeline2, pipeline3, pipeline4, pipeline5,
                           pipeline6, pipeline7, pipeline8, pipeline9, pipeline10,
                           pipeline11, pipeline12, pipeline13, pipeline14, pipeline15,
                           pipeline16, pipeline17, pipeline18, pipeline19, pipeline20];

        for (let i = 0; i < pipelines.length; i++) {
            const result = await movie.aggregate(pipelines[i]).toArray();
            console.log(`Pipeline ${i + 1}:`, result);
        }

    } catch (error) {
        console.error("Error during aggregation:", error);
    }
}

run();

