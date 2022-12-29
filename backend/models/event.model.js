import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    venue: {
      type: String,
      required: true,
    },
    schedule: {
      startDate: {
        type: Date,
        required: false,
      },
      endDate: {
        type: Date,
        required: false,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: false,
      },
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [String],
    registrationLink: {
      type: String,
      required: true,
    },
    isOnline: {
      type: Boolean,
      required: false,
    },
    registrationFee: {
      type: Number,
      required: false,
    },
  },
  { collection: "events" },
  { timestamps: true }
);

const Events=mongoose.model("Events", eventSchema);
export default Events; 
