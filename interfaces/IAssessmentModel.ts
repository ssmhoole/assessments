import Mongoose = require("mongoose");

interface IAssessmentModel extends Mongoose.Document {
    courseId: number;
    assessment: [ {
        description: string;
        assessmentId: number;
        shared: string;
        status: string;
    }];
}
export {IAssessmentModel};
