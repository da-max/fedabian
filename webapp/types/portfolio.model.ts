import InputFile from '~/components/Utils/Form/InputFile.vue'

export type IIcon = string[]|string

export type ITechnology = {
  icons: IIcon[]
  title: string
  content: string,
  class?: string,
  inProgress?: boolean
}

export type IContactLink = {
  title: string,
  content: string,
  icon: IIcon
}

export type IProject = {
  readonly id: number|null,
  title: string,
  description: string,
  image?: {
    contentType: string,
    md5: string,
    chunkSize: string,
    length: string,
    data: File|InputFile,
  },
  repo?: string,
  demo?: string
}

export type IMessage = {
  name: string,
  email: string,
  content: string
}
