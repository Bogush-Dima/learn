const formatToMP3 = (song: string): string => {
  return `${song} formatted to MP3`
}

const formatToFLAC = (song: string): string => {
  return `${song} formatted to FLAC`
}

class Facade {
  formatTo(song: string, format: string): void {
    switch(format) {
      case "MP3":
        console.log(formatToMP3(song));
        break
      case "FLAC":
        console.log(formatToFLAC(song));
        break
      default:
        console.log("Format not found");
        break
    }
  }
}

const facade = new Facade()

facade.formatTo("I believe", "FLAC")
facade.formatTo("Super beast", "MP3")
facade.formatTo("Professional", "Other")

// npx ts-node facade.ts