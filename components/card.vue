<template>
    <div id="card-container">
        <div id="card-image">
            <img :src="imageSrc" :alt="imageAlt">
        </div>
        <div id="card-info">
            <div id="card-title">
                <h1>{{ title }}</h1>
            </div>
            <div id="card-post-info">
                <span>{{ author }}</span>
                <span>{{ publicationDate }}</span>
                <span>{{ formattedTags }}</span>
            </div>
            <div id="card-description">
                <p>{{ description }}</p>
            </div>
            <div id="card-signature">
                <p>{{ signature }} avec Crakilouf</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: 'Image de la carte'
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: 'Auteur inconnu'
        },
        publicationDate: {
            type: String,
            default: 'Date non spécifiée'
        },
        tags: {
            type: Array,
            default: () => []
        },
        description: {
            type: String,
            required: true
        },
        signature: {
            type: String,
            default: ''
        }
    },
    computed: {
        formattedTags() {
            return this.tags.join(' - ');
        }
    }
};
</script>

<style scoped>
#card-container {
    border: 1px solid #ccc;
    padding: 16px;
    max-width: 600px;
    margin: auto;
}
#card-image img {
    width: 100%;
    height: auto;
}
#card-info {
    padding: 16px;
}
#card-title h1 {
    margin: 0 0 8px;
    font-size: 24px;
}
#card-post-info span {
    display: inline-block;
    margin-right: 8px;
    color: #757575;
}
#card-description p {
    margin: 16px 0;
}
#card-signature p {
    text-align: right;
    font-style: italic;
    color: #9e9e9e;
}
</style>