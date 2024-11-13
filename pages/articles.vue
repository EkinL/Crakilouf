<template>
    <div>
        <h1 class="under">Articles</h1>
        <Card 
            :imageSrc="article.imageSrc"
            :imageAlt="article.imageAlt"
            :title="article.title"
            :author="article.author"
            :publicationDate="article.publicationDate"
            :tags="article.tags"
            :description="article.description"
            :signature="article.signature"
        />
        <NuxtLink to="/">
            home page
        </NuxtLink>
    </div> 
</template>

<script>
import Card from '@/components/Card.vue'; // Import cohérent

export default {
    name: 'Articles', // Virgule ajoutée
    components: {
        Card, // Nom cohérent avec l'import
    },
    data() {
        return {
            article: {
                imageSrc: 'https://via.placeholder.com/600x400',
                imageAlt: 'Image de l\'article',
                title: 'Titre de l\'article depuis data',
                author: 'Bob Martin',
                publicationDate: '03/11/2023',
                tags: ['Programmation', 'Design'],
                description: 'Voici la description de l\'article obtenue depuis data.',
                signature: 'Par Bob Martin', // Propriété ajoutée
            },
        };
    },
};
</script>

<style scoped>
.under {
    text-decoration: underline;
}
</style>