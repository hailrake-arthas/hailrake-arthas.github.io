
let watchId = null;


const collegeCoords = {
    latitude: 48.94321,
    longitude: 24.73480
};

function getOnce() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            displayLocation,
            displayError
        );
    } else {
        alert("Geolocation не підтримується");
    }
}

function startWatch() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
            displayLocation,
            displayError,
            { enableHighAccuracy: true }
        );
    }
}

function stopWatch() {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        document.getElementById("location").innerHTML = "Стеження зупинено";
    }
}


function displayLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const acc = position.coords.accuracy;

    document.getElementById("location").innerHTML =
        `Ваші координати: <br>
        Широта: ${lat}<br>
        Довгота: ${lon}<br>
        Точність: ${acc} м`;

    const distance = computeDistance(
        { latitude: lat, longitude: lon },
        collegeCoords
    );

    document.getElementById("distance").innerHTML =
        `Відстань до коледжу: ${distance.toFixed(3)} км`;
}


function displayError(error) {
    const errors = {
        1: "Доступ заборонено користувачем",
        2: "Місцезнаходження недоступне",
        3: "Час очікування вичерпано"
    };

    document.getElementById("location").innerHTML =
        errors[error.code] || "Невідома помилка";
}


function computeDistance(start, dest) {
    const R = 6371;

    const lat1 = degreesToRadians(start.latitude);
    const lon1 = degreesToRadians(start.longitude);
    const lat2 = degreesToRadians(dest.latitude);
    const lon2 = degreesToRadians(dest.longitude);

    return Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.cos(lon1 - lon2)
    ) * R;
}

function degreesToRadians(deg) {
    return deg * Math.PI / 180;
}
