export interface noteType {
   _id : any,
   title: string,
   description: string,
   content: string,
   creator?: string,
   likes?: number,
   isPrivate?: boolean
}