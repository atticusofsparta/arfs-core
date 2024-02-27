export const transactionFragmentId = `
id
`;

export const transactionFragmentAnchor = `
anchor
`;

export const transactionFragmentSignature = `
signature
`;

export const transactionFragmentRecipient = `
recipient
`;

export const transactionFragmentOwner = `
owner {
    address
    key
}
`;

export const transactionFragmentFee = `
fee {
    winston
    ar
}
`;

export const transactionFragmentQuantity = `
quantity {
    winston
    ar
}
`;

export const transactionFragmentData = `
data {
    size
    type
}
`;

export const transactionFragmentTags = `
tags {
    name
    value
}
`;

export const transactionFragmentBlock = `
block {
    id
    timestamp
    height
    previous
}
`;

export const transactionFragmentParent = `
parent {
    id
}
`;

export const transactionFragmentBundledIn = `
bundledIn {
    id
}
`;

export const completeTransactionFragment = `
${transactionFragmentId}
${transactionFragmentAnchor}
${transactionFragmentSignature}
${transactionFragmentRecipient}
${transactionFragmentOwner}
${transactionFragmentFee}
${transactionFragmentQuantity}
${transactionFragmentData}
${transactionFragmentTags}
${transactionFragmentBlock}
${transactionFragmentParent}
${transactionFragmentBundledIn}
`;

export const edgesFragment = `
edges {
    node {
     ${completeTransactionFragment}
  }
}
`;
export const pageInfoFragment = `
pageInfo {
  hasNextPage
}
`;

export const transactionConnectionFragment = `
${pageInfoFragment}
${edgesFragment}

`;

export const arfsTransactionFragment = `
    ${pageInfoFragment}
    edges {
        cursor
        node {
            ${transactionFragmentId}
            ${transactionFragmentData}
            ${transactionFragmentTags}
            ${transactionFragmentBlock}
        }
    }
`;
