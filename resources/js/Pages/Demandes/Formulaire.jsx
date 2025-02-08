import React, { useState, useCallback, memo } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import InputError from '@/Components/InputError';
import { Card } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select } from '@/Components/ui/select';
import { Button } from '@/Components/ui/button';
import { FileInput } from '@/Components/ui/file-input';
import { Loader2 } from 'lucide-react';

// Composant de section réutilisable (mémorisé pour éviter les re‑rendus inutiles)
const FormSection = memo(({ title, children }) => (
  <div className="space-y-6 border-b border-gray-200 pb-6">
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    <div className="grid gap-4 md:grid-cols-2">
      {children}
    </div>
  </div>
));

// Composant d'upload de document mémorisé
const DocumentUpload = memo(({ label, id, file, preview, onChange, error }) => (
  <div className="space-y-2">
    <Label htmlFor={id} required>{label}</Label>
    <div className="flex items-center gap-4">
      <FileInput
        id={id}
        onChange={(e) => onChange(e.target.files[0])}
        accept=".jpg,.jpeg,.png,.pdf"
        className="w-full"
      />
      {file && (
        <div className="mt-2 w-20 h-20 border rounded-md overflow-hidden flex items-center justify-center">
          {preview ? (
            <img src={preview} alt="Aperçu" className="object-cover w-full h-full" />
          ) : (
            <div className="p-2 text-xs text-gray-500 text-center">{file.name}</div>
          )}
        </div>
      )}
    </div>
    {error && <p className="text-sm text-red-600">{error}</p>}
  </div>
));

export default function Formulaire({ typesDemande, communes, situations, typesBien }) {
  // État local pour stocker les aperçus des fichiers
  const [filePreviews, setFilePreviews] = useState({});

  // Utilisation du hook useForm d'InertiaJS pour gérer le formulaire
  const { data, setData, post, processing, errors, reset: resetForm } = useForm({
    nom: '',
    prenom: '',
    matricule: '',
    fonction: '',
    email: '',
    telephone: '',
    type_demande: '',
    type_bien: '',
    situation_matrimoniale: '',
    commune: '',
    quartier: '',
    precision: '',
    photo: null,
    carte_identite: null,
    demande_manuscrite: null,
    bulletin_salaire: null,
  });

  // Gestion de l'upload et de la prévisualisation des fichiers
  const handleFileChange = useCallback((field, file) => {
    setData(field, file);

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreviews((prev) => ({ ...prev, [field]: e.target.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreviews((prev) => ({ ...prev, [field]: null }));
    }
  }, [setData]);

  // Gestion du changement pour le type de demande
  const handleTypeDemandeChange = useCallback((e) => {
    const value = e.target.value;
    setData('type_demande', value);
    if (!value) {
      setData('type_bien', '');
    }
  }, [setData]);

  // Gestionnaire générique pour les champs de saisie texte
  const handleChange = useCallback((field) => (e) => {
    setData(field, e.target.value);
  }, [setData]);

  // Réinitialisation complète du formulaire et des aperçus
  const handleReset = useCallback(() => {
    resetForm();
    setFilePreviews({});
  }, [resetForm]);

  // Envoi du formulaire
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    post(route('demandes.store'), {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: handleReset,
      onError: (errors) => {
        console.error('Erreurs de validation:', errors);
      },
    });
  }, [post, handleReset]);

  return (
    <AppLayout>
      <Head title="Formulaire de Demande" />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <Card className="p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-primary-800">Nouvelle Demande de Logement</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 : Type de demande */}
            <FormSection title="1. Type de demande">
              <div>
                <Label htmlFor="type_demande" required>Type de Demande</Label>
                <Select
                  id="type_demande"
                  value={data.type_demande}
                  onChange={handleTypeDemandeChange}
                  error={errors.type_demande}
                >
                  <option value="">Sélectionner le type</option>
                  {Object.entries(typesDemande).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Select>

                <InputError
                  message={errors.type_demande}
                  className="mt-2"
                />

              </div>
              <div>
                <Label htmlFor="type_bien" required>Type de Bien</Label>
                <Select
                  id="type_bien"
                  value={data.type_bien}
                  onChange={handleChange('type_bien')}
                  error={errors.type_bien}
                  disabled={!data.type_demande}
                >
                  <option value="">Sélectionner le bien</option>
                  {data.type_demande && typesBien[data.type_demande]?.map((bien) => (
                    <option key={bien} value={bien}>{bien}</option>
                  ))}
                </Select>
                

                <InputError
                  message={errors.type_bien}
                  className="mt-2"
                />
              </div>

            </FormSection>

            {/* Affichage conditionnel du reste du formulaire */}
            {data.type_demande && data.type_bien && (
              <>
                {/* Section 2 : Informations personnelles */}
                <FormSection title="2. Informations personnelles">
                  <div>
                    <Label htmlFor="nom" required>Nom</Label>
                    <Input
                      id="nom"
                      value={data.nom}
                      onChange={handleChange('nom')}
                      error={errors.nom}
                    />

                    <InputError
                      message={errors.nom}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="prenom" required>Prénom</Label>

                    <Input
                      id="prenom"
                      value={data.prenom}
                      onChange={handleChange('prenom')}
                      error={errors.prenom}
                    />
                    

                    <InputError
                      message={errors.prenom}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="matricule" required>Matricule</Label>
                    <Input
                      id="matricule"
                      value={data.matricule}
                      onChange={handleChange('matricule')}
                      error={errors.matricule}
                    />

                    <InputError
                      message={errors.matricule}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fonction" required>Fonction</Label>

                    <Input
                      id="fonction"
                      value={data.fonction}
                      onChange={handleChange('fonction')}
                      error={errors.fonction}
                    />
                    

                    <InputError
                      message={errors.fonction}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" required>Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                    />

                    <InputError
                      message={errors.email}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephone" required>Téléphone</Label>

                    <Input
                      id="telephone"
                      value={data.telephone}
                      onChange={handleChange('telephone')}
                      error={errors.telephone}
                      pattern="[0-9]{9}"
                    />

                    <InputError
                      message={errors.telephone}
                      className="mt-2"
                    />
                  </div>
                </FormSection>


                {/* Section 3 : Situation */}
                <FormSection title="3. Situation">
                  <div>
                    <Label htmlFor="situation_matrimoniale" required>Situation Matrimoniale</Label>
                    <Select
                      id="situation_matrimoniale"
                      value={data.situation_matrimoniale}
                      onChange={handleChange('situation_matrimoniale')}
                      error={errors.situation_matrimoniale}
                    >
                      <option value="">Sélectionner la situation</option>
                      {situations.map((situation) => (
                        <option key={situation} value={situation}>{situation}</option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="commune" required>Commune</Label>
                    <Select
                      id="commune"
                      value={data.commune}
                      onChange={handleChange('commune')}
                      error={errors.commune}
                    >
                      <option value="">Sélectionner la commune</option>
                      {communes.map((commune) => (
                        <option key={commune} value={commune}>{commune}</option>
                      ))}
                    </Select>

                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="quartier" required>Quartier</Label>
                    <Input
                      id="quartier"
                      value={data.quartier}
                      onChange={handleChange('quartier')}
                      error={errors.quartier}
                    />

                    <InputError
                      message={errors.quartier}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="precision">Précisions supplémentaires</Label>

                    <textarea
                      id="precision"
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2"
                      rows={3}
                      value={data.precision}
                      onChange={handleChange('precision')}
                    />
                    {errors.precision && <p className="mt-1 text-sm text-red-600">{errors.precision}</p>}
                  </div>
                </FormSection>

                {/* Section 4 : Documents */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900">4. Documents à fournir</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <DocumentUpload
                      label="Photo d'identité"
                      id="photo"
                      file={data.photo}
                      preview={filePreviews.photo}
                      onChange={(file) => handleFileChange('photo', file)}
                      error={errors.photo}
                    />
                    <DocumentUpload
                      label="Carte d'identité"
                      id="carte_identite"
                      file={data.carte_identite}
                      preview={filePreviews.carte_identite}
                      onChange={(file) => handleFileChange('carte_identite', file)}
                      error={errors.carte_identite}
                    />
                    <DocumentUpload
                      label="Demande manuscrite"
                      id="demande_manuscrite"
                      file={data.demande_manuscrite}
                      preview={filePreviews.demande_manuscrite}
                      onChange={(file) => handleFileChange('demande_manuscrite', file)}
                      error={errors.demande_manuscrite}
                    />
                    <DocumentUpload
                      label="Bulletin de salaire"
                      id="bulletin_salaire"
                      file={data.bulletin_salaire}
                      preview={filePreviews.bulletin_salaire}
                      onChange={(file) => handleFileChange('bulletin_salaire', file)}
                      error={errors.bulletin_salaire}
                    />
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline" onClick={handleReset} disabled={processing}>
                    Réinitialiser
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white"
                    disabled={processing}
                  >
                    {processing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer la demande'
                    )}
                  </Button>
                </div>
              </>
            )}
          </form>
        </Card>
      </div>
    </AppLayout>
  );
}
