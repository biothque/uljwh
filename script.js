// Initialisation de Backendless avec tes identifiants personnels :
const APP_ID = "75F9B527-FE0B-4C7E-B2F4-1AD71EE054A0";
const API_KEY = "60E69D44-7601-447C-B228-6E26EE396C20";
const TABLE_NAME = "inscriptions";

Backendless.initApp(APP_ID, API_KEY);

const form = document.getElementById("formInscription");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nom: form.nom.value.trim(),
    postnom: form.postnom.value.trim(),
    prenom: form.prenom.value.trim(),
    genre: form.genre.value,
    lieu_naissance: form.lieu.value.trim(),
    date_naissance: form.dateNaissance.value,
    nom_pere: form.pere.value.trim(),
    nom_mere: form.mere.value.trim(),
    ecole_frequentee: form.ecole.value.trim(),
    annee_fin: form.annee.value,
    faculte: form.faculte.value,
    filiale: form.filiale.value
  };

  try {
    await Backendless.Data.of(TABLE_NAME).save(data);
    message.textContent = "✅ Inscription enregistrée avec succès !";
    message.style.color = "#00ff88";
    form.reset();
  } catch (error) {
    console.error("Erreur Backendless :", error);
    message.textContent = "❌ Une erreur est survenue. Vérifie ta connexion Internet.";
    message.style.color = "#ff4444";
  }
});
