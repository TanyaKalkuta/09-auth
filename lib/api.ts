// import axios from 'axios';
// import type { Note, NewNote } from '../types/note';

// axios.defaults.baseURL = `https://notehub-public.goit.study/api`;
// const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

// export interface FetchNotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// export default async function fetchNotes(
//   search: string,
//   page: number,
//   tag?: string
// ): Promise<FetchNotesResponse> {
//   const { data } = await axios.get<FetchNotesResponse>(`/notes`, {
//     params: {
//       page,
//       perPage: 12,
//       search: search,
//       tag,
//     },
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
//   // 👇 тут ти побачиш, що приходить
//   console.log('FETCHED NOTES:', data);
//   return data;
// }

// export async function createNote(newNote: NewNote): Promise<Note> {
//   const { data } = await axios.post<Note>('/notes', newNote, {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
//   console.log('CREATED NOTE:', data);
//   return data;
// }

// export async function deleteNote(id: string): Promise<Note> {
//   const { data } = await axios.delete<Note>(`/notes/${id}`, {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
//   console.log('DELETED NOTE:', data);
//   return data; // ✅ Повертаємо об'єкт видаленої нотатки
// }

// export async function fetchNoteById(noteId: Note['id']) {
//   const { data } = await axios.get<Note>(`/notes/${noteId}`, {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
//   return data;
// }
