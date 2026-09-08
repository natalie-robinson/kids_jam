export const SONG_URL_DICTIONARY: Record<string, string> = {
  "angeline_the_baker": "https://www.traditionalmusic.co.uk/american-mandolin-tab/pdf/angeline_the_baker(2)-mandolin-tab.pdf",
  "old_joe_clark": "https://www.traditionalmusic.co.uk/american-mandolin-tab/pdf/old_joe_clark_2-mandolin-tab.pdf",
  "dark_hollow": "https://www.traditionalmusic.co.uk/bluegrass-lyrics-chords/pdf/dark_hollow.pdf",
  "cluck_old_hen": "https://www.traditionalmusic.co.uk/american-mandolin-tab/pdf/cluck_old_hen_1-mandolin-tab.pdf",
  "cherokee_shuffle": "https://www.traditionalmusic.co.uk/american-mandolin-tab/pdf/cherokee_shuffle-mandolin-tab.pdf",
  "bury_me_beneath_the_willow": "https://www.traditionalmusic.co.uk/mandolin-tab/mandolin-tab-pdf/Bury_Me_Beneath_The_Willow-mandolin-tab.pdf",
  "freight_train": "https://www.traditionalmusic.co.uk/bluegrass-lyrics-chords/pdf/freight_train.pdf",
  "long_journey_home": "https://www.traditionalmusic.co.uk/top-folksongs-chords/pdf/long-journey-home.pdf",
  "salt_spring": "https://musescore.com/user/8636681/scores/17562820?srsltid=AfmBOor2AG9JquWhdsFUoWN7PLu1z_IUI8R7TzZammr_qc2JtNWpaqZ-f",
  "whiskey_before_breakfast": "https://www.traditionalmusic.co.uk/session-mandolin-tab/pdf/whisky_before_breakfast-mandolin-tab.pdf",
  "squirrel_hunter": "https://www.traditionalmusic.co.uk/session-mandolin-tab/pdf/squirrel_hunter-mandolin-tab.pdf",
  "ive_endured": "https://tabs.ultimate-guitar.com/tab/tim-obrien/ive-endured-chords-2856695",
  "salt_creek": "https://www.celticguitarmusic.com/tbot_salt_creek.htm", 
  "blackberry_blossom": "https://www.traditionalmusic.co.uk/session-guitar-tab/blackberry_blossom.htm",
  "red_haired_boy": "https://www.youtube.com/watch?v=uP92qGlnDF8",
};

export const formatFileName = (key: string) => {
  return key
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const titleToKey = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_');
};

export const getSongUrl = (title: string): string | undefined => {
  const key = titleToKey(title);
  return SONG_URL_DICTIONARY[key];
};