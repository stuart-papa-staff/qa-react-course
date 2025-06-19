import { Bootcamp } from './models/bootcamp';

const form = document.querySelector('.create');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newBootcamp = {
        title: data.get('title'),
        description: data.get('description'),
        courses: data.getAll('courses'),
        length: parseInt(data.get('length')),
        id: Math.floor(Math.random() * 1000)
       
    }

    const res = await Bootcamp.save(newBootcamp);
    if (!res.ok) {
        console.error('Error saving bootcamp');
    }
    if (res.ok) {
        window.location.href = '/';
    }
});
