import { Bootcamp, BootcampProps } from "./models/bootcamp";

const rootElement = document.querySelector('.root')!



function createBootcampTemplate(bootcamp) {
    return `
        <div class="bootcamp">
            <h2>${bootcamp.title}</h2>
            <hr>
            <p>${bootcamp.description}</p>
            <p class="courses">${bootcamp.courses.join(' - ')}</p>
            <p>Length of Bootcamp ${bootcamp.length} days</p>
           <button class="delete-button" data-id="${bootcamp.id}">Delete</button>
        </div>
    `
}

async function deleteBootcamp(id) {
        await Bootcamp.delete(id);
}

document.addEventListener('click', async (event) => {
    const deleteButton = event.target;
    if (deleteButton.classList.contains('delete-button')) {
        const id = deleteButton.dataset.id;
        if (id) {
            const bootcampId = parseInt(id);
            await deleteBootcamp(bootcampId);
            deleteButton.parentElement?.remove();
        }
    }
});


function renderTemplates(templates, parent) {
    const templateElement = document.createElement('template')

    for (const t of templates) {
     templateElement.innerHTML += t
    }

    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {

    const bootcamps = await Bootcamp.loadAll()
   
    const bootcampTemplates = bootcamps.map(createBootcampTemplate)
    
    renderTemplates(bootcampTemplates, rootElement)

})
