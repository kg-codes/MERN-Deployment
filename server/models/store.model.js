const mongoose =  require('mongoose');

const StoreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
            minLength: [3, '{PATH} must contain {MINLENGTH} characters!']
        },
        number: {
            type: Number,
            required: [true, '{PATH} is required'],
            min: [1, '{PATH} must be greater than or equal to {MIN}'],
            max: [10000000, '{PATH} must be less than or equal to {MAX}']
        },
        open: {
            type: Boolean
        }
    },
    { timestamps: true }
)

const Store = mongoose.model('Store', StoreSchema);

module.exports = { Store };