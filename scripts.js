// Funktion zum Überprüfen, ob alle Checkboxen angeklickt sind
function checkAllTasksCompleted() {
    // Wähle alle Checkboxen aus
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Prüfe, ob alle Checkboxen ausgewählt sind
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    // Wenn alle Checkboxen ausgewählt sind
    if (allChecked) {
        // Blende den gesamten alten Inhalt aus und zeige den neuen Text
        const content = document.getElementById("content");
        content.innerHTML = "<h1>Supi, dann kann es ja jetzt losgehen!</h1>";
    }
}

// Event-Listener für jede Checkbox hinzufügen
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', checkAllTasksCompleted);
});
