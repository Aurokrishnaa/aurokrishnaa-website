import React from 'react';
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const BASE = import.meta.env.BASE_URL;
const RESUME_PATH = `${BASE}Resume_Aurokrishnaa.pdf`;

const Resume = () => {
    return (
        <div className="py-10 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <h1 className="text-3xl font-bold text-slate-800">Resume</h1>

                <a
                    href={RESUME_PATH}
                    download="Resume_Aurokrishnaa.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md transition-all active:scale-95"
                >
                    <FaDownload size={14} /> Download PDF
                </a>
            </div>

            {/* Mobile: Prominent Download Card */}
            <div className="md:hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                        <FaFilePdf size={24} className="text-white" />
                    </div>
                    <div className="text-left">
                        <h2 className="text-lg font-bold text-slate-800">Resume_Aurokrishnaa.pdf</h2>
                        <p className="text-sm text-slate-500">Download for best experience</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <a
                        href={RESUME_PATH}
                        download="Resume_Aurokrishnaa.pdf"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-md transition-all active:scale-95"
                    >
                        <FaDownload size={14} /> Download
                    </a>

                    <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold transition-all active:scale-95"
                    >
                        <FaExternalLinkAlt size={12} /> Open
                    </a>
                </div>
            </div>

            {/* Mobile: PDF Preview - Tappable to open in new tab for zoom */}
            <div className="md:hidden mt-6">
                <p className="text-sm font-medium text-slate-500 mb-3">Preview</p>
                <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full bg-slate-50 border border-slate-200 shadow-sm rounded-xl overflow-hidden group"
                >
                    {/* PDF Preview */}
                    <iframe
                        src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-[500px] border-none pointer-events-none"
                        title="Resume Preview"
                    />

                    {/* Tap to Zoom Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end pb-6 transition-opacity">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full shadow-lg">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            <span className="text-sm font-semibold text-slate-700">Tap to zoom & view</span>
                        </div>
                    </div>
                </a>
            </div>

            {/* Desktop/Tablet: PDF Viewer */}
            <div className="hidden md:block w-full bg-slate-50 border border-slate-200 shadow-sm rounded-lg overflow-hidden p-1">
                <iframe
                    src={RESUME_PATH}
                    className="w-full h-[1200px] border-none"
                    title="Resume Viewer"
                />
            </div>

            <div className="hidden md:block mt-8 text-center">
                <p className="text-slate-500 mb-4">Having trouble viewing?</p>
                <a
                    href={RESUME_PATH}
                    target="_blank"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Open PDF in new tab
                </a>
            </div>
        </div>
    );
};

export default Resume;
