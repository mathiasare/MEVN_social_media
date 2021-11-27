const { Schema, model } = require('mongoose');

const msgSchema = new Schema(
  {
    from: {
      type: String,
      required: [true, 'from field is required'],
    },
    to: {
      type: String,
      required: [true, 'to field is required'],
    },
    msg: {
      type: String,
      required: [true, 'message field is required'],
    },
  },
  { timestamps: true },
);

module.exports = model('message', msgSchema);