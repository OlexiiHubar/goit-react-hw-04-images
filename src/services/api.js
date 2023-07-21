const KEY = '35913221-34348c22814a424275449694d';

export default function fetchImage(imageQuery, page) {
  const url = `https://pixabay.com/api/?q=${imageQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Trere is not any pictures with ${imageQuery} name! `)
    );
  });
}
