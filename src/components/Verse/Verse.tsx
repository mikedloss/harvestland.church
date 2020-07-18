import React from 'react';

import * as Styled from './Verse.styles';

export interface VerseProps {
  verse: string;
}

export const Verse: React.FC<VerseProps> = ({ verse }) => {
  const regexedVerse = verse.match(BIBLE_REGEX);
  const bookName = BOOK_DECODE[regexedVerse[1]];
  const verseReference = regexedVerse[2];
  const [chapter, verses] = verseReference.split(':');

  const finalVersePath = `${bookName}.${chapter}.${verses}`;
  const bibleUrl = `https://www.bible.com/bible/111/${finalVersePath}.NIV`;

  return (
    <Styled.VerseStyle
      href={bibleUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {verse}
    </Styled.VerseStyle>
  );
};

const BIBLE_REGEX = /((?:(?:[123]|I{1,3})\s*)?(?:[A-Z][a-zA-Z]+|Song of Songs|Song of Solomon)).?\s*((?:1?[0-9]?[0-9]):\s*\d{1,3}(?:[,-]\s*\d{1,3})*(?:;\s*(?:(?:[123]|I{1,3})\s*)?(?:[A-Z][a-zA-Z]+|Song of Songs|Song of Solomon)?.?\s*(?:1?[0-9]?[0-9]):\s*\d{1,3}(?:[,-]\s*\d{1,3})*)*)/;

const BOOK_DECODE = {
  Genesis: 'gen',
  Exodus: 'exo',
  Leviticus: 'lev',
  Numbers: 'num',
  Deuteronomy: 'deu',
  Joshua: 'jos',
  Judges: 'jud',
  Ruth: 'rut',
  '1 Samuel': '1sa',
  '2 Samuel': '2sa',
  '1 Kings': '1ki',
  '2 Kings': '2ki',
  '1 Chronicles': '1ch',
  '2 Chronicles': '2ch',
  Ezra: 'ezr',
  Nehemiah: 'neh',
  Esther: 'est',
  Job: 'job',
  Psalms: 'psa',
  Proverbs: 'pro',
  Ecclesiastes: 'ecc',
  'Song of Solomon': 'sng',
  Isaiah: 'isa',
  Jeremiah: 'jer',
  Lamentations: 'lam',
  Ezekiel: 'ezk',
  Daniel: 'dan',
  Hosea: 'hos',
  Joel: 'jol',
  Amos: 'amo',
  Obadiah: 'oba',
  Jonah: 'jon',
  Micah: 'mic',
  Nahum: 'nam',
  Habakkuk: 'hab',
  Zephaniah: 'zep',
  Haggai: 'hag',
  Zechariah: 'zec',
  Malachi: 'mal',
  Matthew: 'mat',
  Mark: 'mrk',
  Luke: 'luk',
  John: 'jhn',
  Acts: 'act',
  Romans: 'rom',
  '1 Corinthians': '1co',
  '2 Corinthians': '2co',
  Galatians: 'gal',
  Ephesians: 'eph',
  Philippians: 'php',
  Colossians: 'col',
  '1 Thessalonians': '1th',
  '2 Thessalonians': '2th',
  '1 Timothy': '1ti',
  '2 Timothy': '2ti',
  Titus: 'tit',
  Philemon: 'phm',
  Hebrews: 'heb',
  James: 'jas',
  '1 Peter': '1pe',
  '2 Peter': '2pe',
  '1 John': '1jn',
  '2 John': '2jn',
  '3 John': '3jn',
  Jude: 'jud',
  Revelation: 'rev',
};
