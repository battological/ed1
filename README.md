# ED1
Find words within one edit distance of your word.

http://battological.github.io/ed1/

## What is an edit distance?
Edit distance is a measure of similarity between the spelling of two words. An edit may be an insertion, deletion, or substitution of a letter. We use the most common metric, <a href='https://en.wikipedia.org/wiki/Levenshtein_distance'>Levenshtein distance</a>.

## No similar words
There may be no similar words for two reasons:

### Word is not similar to other words
We have seen your word before, but have found no other words with an edit distance of one from your word.

### Word is not known
We use a small subset of English words based on the standard Unix <code>words</code> file. Specifically, we use those words in the <code>american-english</code> list that are not capitalized and that include no punctuation. This covers most common words, but far from every word in English. If your word is not in that list, we simply don't know about it.

## Contact
For questions, please <a href='https://github.com/battological/ed1/issues/new'>open an issue</a>.
