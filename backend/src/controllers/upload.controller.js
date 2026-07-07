import fs from "fs";
import { parseCSV } from "../services/csv.service.js";

export const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a CSV file.",
      });
    }

    const rows = await parseCSV(req.file.path);

    // Delete uploaded file after parsing
    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      success: true,
      message: "CSV parsed successfully.",
      totalRows: rows.length,
      columns: rows.length ? Object.keys(rows[0]) : [],
      preview: rows.slice(0, 10),
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};