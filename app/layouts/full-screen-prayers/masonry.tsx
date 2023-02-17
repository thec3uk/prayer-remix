import type Masonry from 'masonry-layout';

export type IMasonryProps = {
	msnry: Masonry;
	grid: Element;
};

export function initialiseMasonry(): IMasonryProps {
	const grid = document.querySelector('.grid') as Element;
	const msnry = new window.Masonry(grid, {
		// options...
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		horizontalOrder: true,
		transitionDuration: '1s',
		gutter: '.gutter-sizer',
		stamp: '.stamp',
		fitWidth: true,
		initLayout: false,
	});

	return {
		msnry,
		grid,
	};
}

export function masonryPrependElements(
	masonry: Masonry,
	grid: Element,
	elems: Element[]
) {
	if (
		!masonry ||
		!grid ||
		!masonry.layout ||
		!masonry.prepended ||
		!masonry.reloadItems
	)
		return;

	elems.map(elem => grid?.prepend(elem));
	masonry.prepended(elems);
	masonry.layout();
}

export function masonryRemoveElement(masonry: Masonry, elem: any) {
	if (!masonry || !masonry.remove || !masonry.layout) return;
	masonry.remove(elem);
	masonry.layout();
}

export function masonryAddElement(
	masonry: Masonry,
	grid: Element,
	elem: Element
) {
	if (!masonry || !masonry.prepended || !masonry.layout) return;
	grid.append(elem);
	masonry.prepended([elem]);
	masonry.layout();
}
