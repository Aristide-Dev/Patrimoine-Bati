<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Report;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
// use Illuminate\Container\Attributes\Storage;

class ReportController extends Controller
{
    public function index()
    {
        $reports = Report::latest()->get();
        $categories = Report::CATEGORIES_LIST;
        return Inertia::render('Admin/Reports/Index', ['documents' => $reports, 'categories' => $categories]);
    }

    public function create()
    {
        $categories = Report::CATEGORIES_LIST;
        return Inertia::render('Admin/Reports/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx|max:20480',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'tags' => 'nullable|array',
            'published_at' => 'nullable|date',
        ]);
    
        $filePath = null;
    
        if ($request->hasFile('file')) {
            try {
                $originalFileName = $request->file->getClientOriginalName();
                $sanitizedFileName = str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9\._-]/', '', $originalFileName));
                $filePath = $request->file('file')->storeAs('reports/' . date('Y/m'), uniqid() . "_" . $sanitizedFileName);
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Erreur lors du téléchargement du fichier.');
            }
        }
    
        Report::create([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'tags' => $request->tags ? json_encode($request->tags) : null,
            'file_path' => $filePath,
            'published_at' => $request->published_at,
        ]);
    
        return redirect()->route('admin.reports.index')->with('success', 'Rapport créé avec succès.');
    }
    

    public function edit(Report $report)
    {
        $categories = Report::CATEGORIES_LIST;
        return Inertia::render('Admin/Reports/Create', ['report' => $report, 'categories' => $categories]);
    }

    public function update(Request $request, Report $report)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx,ppt,pptx|max:20480',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            // 'tags' => 'nullable|array',
            'published_at' => 'nullable|date',
        ]);
        // dd($request);

        
        $filePath = null;
        if ($request->hasFile('file')) {
            Storage::delete('reports/'.$report->file_path);
            $filePath = uniqid()."_".$request->file->getClientOriginalName();
            $report->file_path = $request->file->storeAs('reports', $filePath);
        }

        // if ($request->hasFile('file')) {
        //     Storage::delete($report->file_path);
        //     $report->file_path = $request->file('file')->store('reports');
        // }

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
