const baseUrl = "https://casp909i-dr-musicrecord-library-rest.azurewebsites.net/api/MusicRecords"

Vue.createApp({
    data() {
        return {
            musicRecords: [],
            ToGetByTitle: "",
            ToGetByArtist: "",
            ToGetByDuration: "",
            ToGetByPublicationYear: "",
            single: 0,

        }
    },
    methods: {
        async helperGetandShow(url) {
            try {
                const response = await axios.get(url)
                this.musicRecords = await response.data
            }
            catch (ex) {
                alert(ex.message)
            }
        },
        getAllMusicRecords() {
            this.helperGetandShow(baseUrl)
        },

        async getBy(title, artist, duration, publicationYear) {
            const url = baseUrl + "?title=" + title + "&artist=" + artist + "&duration=" + duration + "&publicationYear=" + publicationYear
            try {
                const response = await axios.get(url)
                this.musicRecords = await response.data
            } catch (ex) {
                alert(ex.message)
            }
    }
}
}).mount("#app")