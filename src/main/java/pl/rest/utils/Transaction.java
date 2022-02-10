package pl.rest.utils;

/**\
 * Track all transactions , maintain constant name
 */
public enum Transaction {
    AUTHORIZE,
    CREATEANDISSUE,
    BALANCEENQUIRY,
    SINGLECARD_PREAUTH,
    MULTIREQUEST_PREAUTH,
    SINGLECARD_PREAUTH_CANCEL,
    MULTIREQUEST_VALIDATE,
    SINGLECARD_TRANSACTION_HISTORY,
    CARD_DETAIL,
    REFERENCE_NUMBER_LIST
}
