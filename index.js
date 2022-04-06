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
            deleteId: 0,
            deleteMessage: "",
            addData: {title: "", artist: "", duration: 0, publicationYear: ""},
            addMessage: "",
            updateData: {id: 0, title: "", artist: "", duration: 0, publicationYear: ""},
            updateMessage:""


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
    },
    async deleteRecord(deleteId) {
        const url = baseUrl + "/" + deleteId
        try {
            response = await axios.delete(url)
            this.deleteMessage = response.status + " " + response.statusText
            this.getAllMusicRecords()
        } catch (ex) {
            alert(ex.message)
        }
    },
    async addRecord() {
        try {
            response = await axios.post(baseUrl, this.addData)
            this.addMessage = "response " + response.status + " " + response.statusText
            this.getAllMusicRecords()
        } catch (ex) {
            alert(ex.message)
        }
    }
}
}).mount("#app")