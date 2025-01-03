import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { FileText, ArrowRight, Calendar } from "lucide-react";
import axios from "axios";

export default function RapportsPublications({categories}) {
  const [reports, setReports] = useState([]);
  // const [categories, setCategories] = useState([
  //   { name: "Tous", value: "Tous" },
  //   { name: "Rapports Annuels", value: "Rapports Annuels" },
  //   { name: "Réformes", value: "Réformes" },
  //   { name: "Études", value: "Études" },
  // ]);
  const [filters, setFilters] = useState({ category: "Tous", search: "" });
  const [loading, setLoading] = useState(false);

  console.log('categories', categories);

  React.useEffect(() => {
    fetchReports();
  }, [filters]);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/reports", {
        params: {
          category: filters.category,
          search: filters.search,
          per_page: 10,
        },
      });
      setReports(response.data.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des rapports :", error);
    } finally {
      setLoading(false);
    }
  };

  const truncate = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };

  return (
    <AppLayout>
      <Head 
        title="Rapports et Publications"
        description="Consultez les rapports annuels, les études et les publications de la MAMRI."
      />

      <div className="bg-gradient-to-t from-primary to-primary-800 relative overflow-hidden">
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Rapports et Publications
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Accédez aux rapports annuels, aux analyses des réformes et aux études menées par la MAMRI.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Catégories */}
          <div className="flex justify-center items-center space-x-4 mb-12">
              <button
                    onClick={() => setFilters((prev) => ({ ...prev, category: 'Tous' }))}
                    className={`px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded-lg transition ${
                      filters.category === 'Tous' ? "bg-primary text-white" : ""
                    }`}
                  >
                Tous
              </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilters((prev) => ({ ...prev, category: category.id }))}
                className={`px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded-lg transition ${
                  filters.category === category.id ? "bg-primary text-white" : ""
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Liste des rapports */}
          {loading ? (
            <div className="text-center text-gray-600">Chargement...</div>
          ) : reports.length === 0 ? (
            <div className="text-center text-gray-600">Aucun rapport trouvé.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
}

const ReportCard = ({ report }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border group hover:bg-primary transition-colors rounded-lg shadow-2xl overflow-hidden flex flex-col">
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary-500 group-hover:bg-white text-white group-hover:text-primary rounded-full text-xs font-medium mb-4">
          {report.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-100 mb-3">
          {report.title}
        </h3>
        {report.description && (
        <p className="text-gray-600 group-hover:text-gray-300 text-sm mb-4">
          {expanded
            ? report.description
            : truncate(report.description, 100)}
        </p>
          )}
        {report.description && report.description.length > 100 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary-500 group-hover:text-yellow-400 group-hover:hover:text-yellow-600 text-sm font-medium"
          >
            {expanded ? "Lire moins" : "Lire la suite"}
          </button>
        )}
        <div className="flex items-center text-gray-500 group-hover:text-primary-900 text-sm mb-4">
          <Calendar className="mr-2" size={16} />
          {new Date(report.published_at).toLocaleDateString()}
        </div>
        <a
          href={`/api/reports/${report.id}/download`}
          className="text-white bg-primary group-hover:bg-primary-900 px-5 py-2 rounded-xl font-medium flex items-center mt-auto"
          download
        >
          Télécharger <ArrowRight className="ml-2" size={30} />
        </a>
      </div>
    </div>
  );
};

const truncate = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};
