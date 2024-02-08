
import { Request, Response, NextFunction } from "express";
import { Schema } from "yup";


/**
 * Validate request body with Yup schema
 * @param {schema} schema - Yup schema
 * @returns 
 */
const validateBody = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        await schema.validate(body);
        next();
    }
    catch (err) {
        return res.status(400).json(err);
    };
};


export default validateBody;