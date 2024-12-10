"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTest = exports.updateTest = exports.createTest = exports.getTestById = exports.getAllTests = void 0;
const testModel_1 = __importDefault(require("../models/testModel"));
const getAllTests = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield testModel_1.default.find();
});
exports.getAllTests = getAllTests;
const getTestById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield testModel_1.default.findById(id);
});
exports.getTestById = getTestById;
const createTest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield testModel_1.default.create(data);
});
exports.createTest = createTest;
const updateTest = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield testModel_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateTest = updateTest;
const deleteTest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield testModel_1.default.findByIdAndDelete(id);
});
exports.deleteTest = deleteTest;
