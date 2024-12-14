<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Crakilouf vous propose des solutions.</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Découvrez nos conseils pour protéger l’environnement.</p>
        <div v-for="(article, index) in articles":key="index" class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            <article class="relative isolate flex flex-col gap-8 lg:flex-row">
              <div class="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img :src="article.imageUrl" alt="image article" class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-fill" />
                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div class="flex items-center gap-x-4 text-xs">
                  <time :datetime="test" class="text-gray-500">article date</time>
                  <a :href="test" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> article catégorie</a>
                </div>
                <div class="group relative max-w-xl">
                  <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a :href="test">
                      <span class="absolute inset-0" />
                      {{article.title}}
                    </a>
                  </h3>
                  <p class="mt-5 text-sm/6 text-gray-600">{{article.description}}</p>
                </div>
                <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div class="relative flex items-center gap-x-4">
                    <img :src="article.pp" alt="photo de profil" class="size-10 rounded-full bg-gray-50" />
                    <div class="text-sm/6">
                      <p class="font-semibold text-gray-900">
                        <a :href="test">
                          <span class="absolute inset-0" />
                          {{article.auteur}}
                        </a>
                      </p>
                      <p class="text-gray-600">with Crakilouf</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>

definePageMeta({
  layout: 'custom'
})

import coeurBrise from '@/assets/images/coeurBrise.svg';
import lilian from '@/assets/images/Lilian.webp';

export default {
  name: 'ArticlesPage',
  data() {
    return {
      articles: [
        {
          title: "10 gestes simples pour adopter un mode de vie zéro déchet",
          description:
            "Découvrez comment réduire vos déchets au quotidien grâce à ces 10 gestes simples et efficaces.",
          date: "2024-12-01",
          auteur: "Lilian le Crackilouf",
          imageUrl: coeurBrise,
          pp: lilian,
          link: "/articles/10-gestes-zero-dechet",
        },
        {
          title: "Les produits réutilisables indispensables pour commencer le zéro déchet",
          description:
            "Apprenez quels produits privilégier pour un mode de vie zéro déchet dès aujourd'hui.",
          date: "2024-12-01",
          auteur: "Alex le Crackilouf",
          imageUrl: coeurBrise,
          pp: lilian,
          link: "/articles/produits-reutilisables-zero-dechet",
        },
        {
          title: "Guide pour consommer local et réduire son empreinte écologique",
          description:
            "Explorez les avantages de la consommation locale pour vous et pour la planète.",
          date: "2024-12-01",
          auteur: "Kilian la fraude",
          imageUrl: coeurBrise,
          pp: lilian,
          link: "/articles/consommer-local",
        },
        {
          title: "Top 5 des marques engagées dans l’écologie à soutenir",
          description:
            "Découvrez les marques qui font la différence pour un avenir durable.",
          date: "2024-12-01",
          auteur: "Alexis le plus beau",
          imageUrl: coeurBrise,
          pp: lilian,
          link: "/articles/marques-ecologiques",
        },
        {
          title: "Comprendre le bilan carbone : pourquoi est-ce important ?",
          description:
            "Une introduction au concept de bilan carbone et son importance dans la lutte contre le changement climatique.",
          date: "2022-01-01",
          auteur: "Alois le meilleur parce que il va nous mettre 20/20 *wink wink*",
          imageUrl: coeurBrise,
          pp: lilian,
          link: "/articles/bilan-carbone",
        },
      ],
    };
  },
};
</script>
