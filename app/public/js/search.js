(function (window, document) {
  'use strict';

  const search = e => {
    console.log(e.target.value.length == 0)

    const resEl = document.getElementById('searchResults');
    const resTitleEl = document.getElementById('result-title');
    const noResultsEl = document.getElementById('noResultsFound');
    const typeSomethingToSearchEl = document.getElementById('typeSomethingToSearch');

    if (e.target.value.length == 0){

      resEl.style.display = 'none';
      resTitleEl.style.display='none';
      noResultsEl.style.display = 'none';
      typeSomethingToSearchEl.style.display="block"
    }else{
      typeSomethingToSearchEl.style.display="none"

      const results = window.searchIndex.search(e.target.value, {
        bool: 'OR',
        expand: true,
      });

      resEl.innerHTML = '';

      if (results) {
        // show result
        resEl.style.display = 'block';
        noResultsEl.style.display = 'none';
        resTitleEl.style.display='block'

        results.map(r => {
          const { id, title, description } = r.doc;
          const liEl = document.createElement('li');
          liEl.classList.add('basis-1/3')
          liEl.classList.add('px-2')
          resEl.appendChild(liEl);

          const div = document.createElement('div');
          div.innerHTML=
`
<a href="${id}">
  <div class="
    worklist-card
    p-2 lg:p-4
    border border-slate-150 rounded-xl
    prose prose-p:mb-0 prose-h2:text-base
    ">
    <h2>${title}</h2>
    <code>${id}</code>

    <p class="mt-4">
      ${'Read Install and Update instructions here'}
    </p>
    <div>
    </div>
  </div>
</a>
`
          liEl.appendChild(div);
        });
      } else {
        // hide result
        noResultsEl.style.display = 'block';
        resTitleEl.style.display='none'
      }
    }


  };

  fetch('/search-index.json').then(response =>
    response.json().then(rawIndex => {
      window.searchIndex = elasticlunr.Index.load(rawIndex);
      document.getElementById('searchField')
        .addEventListener('input', search);
    }),
  );
})(window, document);
