const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    seats: {
        type: Array,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    screenType: {
        type: String, // Example: "Standard", "IMAX", "VIP", etc.
        required: true
    },
    movieSchedules: [
        {
            movieId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie', // Reference to the Movie model
                required: true
            },
            showTime: String,
            notAvailableSeats: [{
                // { row: 'D', col: 0, seat_id: '10', price: 300 }
                row : String,
                col : Number,
                seat_id : String,
                price : Number
                
            }],
            showDate: Date
        }
    ]
});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
