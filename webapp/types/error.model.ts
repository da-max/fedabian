import { IImage } from '~/types/image.model'

export type IError = {
  title: string,
  message: string,
  image?: IImage
}
