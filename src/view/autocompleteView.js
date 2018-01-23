import autocompleteTemplate from '../template/autocomplete-tpl.html';
import {
    delegate
} from '../helpers';
import View from './View.js';

export default class extends View {
    constructor(el) {
        super(el);
        this.searchEl = this.qs('#search_str');
        this.suggestionsEl = this.qs('.autocomplete_suggestions');
        this.searchButtonEl = this.qs('.search_btn');
    }

    bind(bindCmd) {
        const bindCommands = {
            press: () => {
                this.on('keyup', e => this.emit('@press', {
                    term: e.target.value,
                    key: e.keyCode,
                    isSeleted: !!this.sel
                }));
            },
            submit: () => {
                this.delegate('.search_btn', 'click', () => this.emit('@submit', {
                    keyword: this.searchEl.value
                }));
            },
            history: () => {
                this.delegate('#search_str', 'click',
                    () => !this.isOpen() && !this.searchEl.value && this.emit('@history'));
            },
            clickSuggestion: () => {
                this.delegate('.autocomplete_suggestion', 'click',
                    e => this.setSel(e.delegateTarget).setSearchbar());
            },
            nonClick: () => {
                delegate('body', '*', 'click',
                    e => e.target !== this.searchEl && this.emptyAutoComplete());
            },
            hover: () => {
                this.delegate('.autocomplete_suggestion', 'mouseover', e => this.setSel(e.delegateTarget))
                    .delegate('.autocomplete_suggestion', 'mouseout', () => this.emptySel());
            }
        };

        bindCommands[bindCmd]();
        return this;
    }

    render(viewCmd, ...params) {
        const viewCommands = {
            autoComplete: () => {
                this.renderAutoComplete(...params);
            },
            history: () => {
                this.renderSearches(...params);
            }
        };

        viewCommands[viewCmd]();
        return this;
    }

    renderAutoComplete(term, suggestions) {
        this.emptyAutoComplete();
        const target = new RegExp(term, 'ig');
        const suggestionsComponent = suggestions.map(suggestion =>
            autocompleteTemplate({
                keyword: suggestion,
                renderKeyword: suggestion.replace(target, `<b>${term}</b>`)
            })).join('');
        this.suggestionsEl.insertAdjacentHTML('afterbegin', suggestionsComponent);
    }

    renderSearches(searches) {
        const historyComponent = searches.map(search =>
            autocompleteTemplate({
                class: 'searches',
                keyword: search,
                renderKeyword: search
            })).join('');
        this.suggestionsEl.insertAdjacentHTML('afterbegin', historyComponent);
    }

    setSearchbar() {
        if (this.isOpen()) {
            this.searchEl.value = this.sel.dataset.value;
            this.emptySel().emptyAutoComplete();
        }
    }

    moveAutoComplete(key) {
        this.sel = this.qs('.autocomplete_suggestion.selected');
        const [nextEl, prevEl] = this.sel ? [this.sel.nextSibling, this.sel.previousSibling] : [this.suggestionsEl.firstChild, this.suggestionsEl.lastChild];
        const target = key === 40 ? nextEl : prevEl;
        this.emptySel().setSel(target);
    }

    setSel(target) {
        this.sel = target;
        this.sel.classList.add('selected');
        return this;
    }

    emptySel() {
        this.sel && this.sel.classList.remove('selected');
        return this;
    }

    emptyAutoComplete() {
        this.suggestionsEl.innerHTML = '';
        return this;
    }

    emptySearchbar() {
        this.searchEl.value = '';
        return this;
    }

    isOpen() {
        return this.suggestionsEl.innerHTML;
    }

}