import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

export const getAllJobs = async (req, resp) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
  resp.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

export const getJod = async (req, resp) => {
  const {
    user: { userId },
    params: { id: jobId}
  } = req;
  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`Not foun job from id:  ${jobId}`);
  }
  resp.status(StatusCodes.OK).json({ job });

};
export const createJob = async (req, resp) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  resp.status(StatusCodes.CREATED).json({ job });
};
export const updateJob = async (req, resp) => {
  resp.send('updateJob controller')
};
export const deleteJod = async (req, resp) => {
  resp.send('deleteJod controller')
};

