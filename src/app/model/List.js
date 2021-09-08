const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongooseDelete = require('mongoose-delete');


const List = new Schema(
    {
        class: { type: String},
        module: { type: String },
        start: { type: String },
        end: { type: String},
        day: { type: String },
        location: { type: String},
        lecturer: { type: String},
        membership: { type: String},
        license_number: { type: String},
        number_of_credit: { type: String},

    },
);
//add plugin
mongoose.plugin(slug);
List.plugin(mongooseDelete,
    {   deletedAt: true,
         overrideMethods: 'all',
        });
module.exports = mongoose.model('List', List);


