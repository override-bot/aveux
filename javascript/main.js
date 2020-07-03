// Add a second document with a generated ID.
function AddStory() {
    db.collection("stories").add({
            first: document.getElementById('story').value,
            date: new Date().toLocaleString(),
            wows: 0

        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    //window.location.href = "index.html";
}

function ReadStory() {
    db.collection("stories").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var larger = document.getElementById("container");
            var container = document.createElement('div');
            container.className = 'text-container';
            var image = document.createElement('div');
            image.className = 'image';
            container.appendChild(image);
            var anon = document.createElement('p');
            anon.className = 'anon';
            anon.innerHTML = "-Anonymous"
            container.appendChild(anon);
            var time = document.createElement('p');
            time.className = 'time';
            time.innerHTML = "posted on" + " " + doc.data().date;
            container.appendChild(time);
            var story = document.createElement('p');
            story.className = 'story';
            story.innerHTML = doc.data().first;
            container.appendChild(story);
            larger.append(container);
        });
    });
}