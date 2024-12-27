<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Report;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Container\Attributes\Storage;

class ReportController extends Controller
{
    public function index()
    {
        $reports = Report::latest()->get();
        return Inertia::render('Admin/Reports/Index', ['documents' => $reports]);
    }

    public function create()
    {
        return Inertia::render('Admin/Reports/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf|max:20480', // PDF, max 20MB
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'tags' => 'nullable|array',
            'published_at' => 'nullable|date',
        ]);

        $filePath = $request->file('file')->store('reports');

        Report::create([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'tags' => $request->tags,
            'file_path' => $filePath,
            'published_at' => $request->published_at,
        ]);

        return redirect()->route('admin.reports.index')->with('success', 'Rapport créé avec succès.');
    }

    public function edit(Report $report)
    {
        return Inertia::render('Admin/Reports/Create', ['report' => $report]);
    }

    public function update(Request $request, Report $report)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'nullable|file|mimes:pdf|max:20480', // PDF, max 20MB
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            // 'tags' => 'nullable|array',
            'published_at' => 'nullable|date',
        ]);
        // dd($request);

        if ($request->hasFile('file')) {
            Storage::delete($report->file_path);
            $report->file_path = $request->file('file')->store('reports');
        }

        $report->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'tags' => $request->tags ?? null,
            'file_path' => $report->file_path,
            'published_at' => $request->published_at,
        ]);

        return redirect()->route('admin.reports.index')->with('success', 'Rapport mis à jour avec succès.');
    }

    public function destroy(Report $report)
    {
        Storage::delete($report->file_path);
        $report->delete();

        return redirect()->route('admin.reports.index')->with('success', 'Rapport supprimé avec succès.');
    }
}
