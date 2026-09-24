import { apiClient } from "./api-client";

export interface Word {
  id: number;
  number: number;
  text: string;
  waqf_mark: string;
  tajweed_rule: string;
  line_number: number;
  code_v2: string;
  v2_page: number;
  style: string | null;
  aya_number: number;
  sajda: boolean;
  sajda_type: string;
  mushaf_aya_id: number;
  parent_aya_id: number;
}

export interface SurahLines {
  [lineNumber: string]: Word[];
}

export interface Surah {
  id: string;
  name: string;
  is_start: boolean;
  basmala: boolean;
  lines: SurahLines;
}

export interface PageInfo {
  number: number;
  style_file: string;
}

export interface QuranPageResponse {
  page: PageInfo;
  surahs: Surah[];
}

export async function getQuranPage(
  pageNumber: number,
): Promise<QuranPageResponse> {
  return apiClient<QuranPageResponse>(`/quran/pages/${pageNumber}/`);
}
