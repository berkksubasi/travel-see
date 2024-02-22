module.exports = {
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: false,
    arrowParens: 'always',
    printWidth: 70,
    singleAttributePerLine: true,
    importOrder: ['@assets/(.*)$', '@components/(.*)$', '@hooks/(.*)$', '@ui/(.*)$', '@libs/(.*)$', '@navigation/(.*)$', '@constants/(.*)$', '@pages/(.*)$', '@styles/(.*)$', '@userActions/(.*)$', '@(.*)$', '^[./]'],
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
};
