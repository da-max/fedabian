export type IImage = {
  src: string,
  alt?: string
}

export type IError = {
  title: string,
  message: string,
  image?: IImage
}

export type IAlert = {
  id?: number,
  title: string,
  content: string,
  readonly status: string,
  timeout?: number,
  pos?: string
}
