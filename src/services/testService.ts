import TestModel, { ITest } from "../models/testModel";

export const getAllTests = async (): Promise<ITest[]> => {
  return await TestModel.find();
};

export const getTestById = async (id: string): Promise<ITest | null> => {
  return await TestModel.findById(id);
};

export const createTest = async (data: Partial<ITest>): Promise<ITest> => {
  return await TestModel.create(data);
};

export const updateTest = async (id: string, data: Partial<ITest>): Promise<ITest | null> => {
  return await TestModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTest = async (id: string): Promise<ITest | null> => {
  return await TestModel.findByIdAndDelete(id);
};
