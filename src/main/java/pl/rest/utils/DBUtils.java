package pl.rest.utils;

import com.qc.cuke.ScenarioContext;
import com.qc.qa.ConfigPropertyException;
import com.qc.qa.FrameworkException;
import com.qc.qa.dbutils.DBConnectionManager;
import com.qc.qa.dbutils.DBPoolProvider;
import com.qc.qa.utils.DataGenerator;
import com.qc.qa.utils.LoadProperties;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.charset.Charset;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.*;
import java.util.regex.Pattern;

import static com.qc.qa.dbutils.DBConnectionManager.getQueryResults;
import static com.qc.qa.dbutils.DBPoolProvider.getConnection;
import static pl.rest.utils.TestSetDataReader.getAPITestSetData;


public class DBUtils<query> {

    public static TestSetDataReader testSetDataReader;
    public DBUtils(ScenarioContext context) {
        testSetDataReader = new TestSetDataReader(context);
    }
    public DBUtils() {}
    public static String TESTDATASET ="";
    public static String TESTCASEID ="";
    public static String TESTCASESCENARIONAME ="";
    private static final Logger logger = LoggerFactory.getLogger(DBUtils.class);

    private static final String CHINESE_LIST = "诶比西迪伊艾弗吉艾尺艾杰开艾勒艾马艾娜哦屁吉吾艾儿艾丝提伊吾维豆贝尔维艾克斯吾艾贼德";
    private static final String GERMAN_LIST = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß";
    private static final String ARABIC_LIST = "شغظذخثتسرقضفعصنملكيطحزوهدجبأشغظذخثتسرقضفعشغظذخثتسرقضفعشغظذخثتسرقضفعصنمل";
    private static final String HINDI_LIST = "अकआकाॲकॅऑकॉइकिईकीउकुऊकूऎकॆएकेऐकैकॊओकोऔकौऋकृॠकॄऌकॢॡकॣअंकंअःकःक्";
    private static final int RANDOM_STRING_LENGTH = 10;
    public static String CHAR_LIST = "";

    public enum giftCardSetting {
        MAXLIMITFORREDEMPTION,
        DEACTIVATEZEROBALANCE,
        MINLIMITFORREDEMPTION,
        MINLIMITFORRELOAD,
        MAXLIMITFORRELOAD,
        CARDEXPIRY,
        NUMBEROFDAYSFORCARDEXPIRY,
        VIEWBALANCEENQUIRY,
        EXPIRYEXTENSIONDAYS,
        RELOADUNIT,
        INITIALVALUELOADTYPEID,
        MININITIALVALUE,
        MAXINITIALVALUE,
        ADJUSTAMOUNTONACTIVATE,
        ADJUSTMENTAMOUNT,
        ADJUSTMENTAMOUNTTYPEID,
        ADJUSTMENTTYPEID,
        ALLOWRELOADAFTEREXPIRY,
        CARRYFORWARDBALANCEONRELOADAFTEREXPIRY,
        NUMBEROFFAILEDPINATTEMPTS,
        CARDPINVALIDATIONTYPEID,
        NOTIFYMESSAGEENABLED,
        REGENERATEDCARDPINENABLED,
        NOTIFICATIONMESSAGESCRIPTNAME,
        ENABLESELFSERVICEAPPPINGENERATION,
        CUSTOMERVALIDATIONNEEDEDFORREDEMPTION,
        ALLOWACTIVATIONACROSSOUTLETS,
        SENDRECENTTRANSACTIONS,
        NUMBEROFRECENTTRANSACTIONS,
        ONETIMEREDEMPTION,
        CARDEXPIRYDATE,
        ALLOWEXPIRYOVERRIDEFORACTIVATE,
        ALLOWEXPIRYOVERRIDEFORRELOAD,
        MAXCARDBALANCE,
        PINREQUIREDFORPROXY,
        BILLAMOUNTMANDATORY,
        MINLIMITFORBILLAMOUNT,
        MAXLIMITFORBILLAMOUNT,
        MOVENEWLYACTIVATEDCARDSTOPURCHASEDSTATE,
        ONLYFIXEDDENOMINATION,
        FIXEDDENOMINATIONVALUE,
        CARRYFORWARDONRELOAD,
        LIMITREDEMPTION,
        REDEMPTIONLIMITPERMONTH,
        AUTORELOAD,
        AUTORELOADMONTHCOUNT,
        AUTORELOADAMOUNT,
        ACTIVATIONBEGINDATE,
        ACTIVATIONENDDATE,
        RELOADBEGINDATE,
        RELOADENDDATE,
        RELOADINERVALINDAYS,
        RELOADDATEOFEACHMONTH,
        ACTIVATIONURL,
        CARDPININRESPONSEFORACTIVATIONURLENABLED,
        ALLOWPROXYXACTION,
        REDEMPTIONBEGINDATE,
        REDEMPTIONENDDATE,
        OVERRIDECARDPINVALIDATION,
        DONOTREGENERATECARDPINFORACTIVECARDS,
        BARCODEINRESPONSEENABLED,
        ISEXPIRYTHRESHOLDENABLED,
        EXPIRYTHRESHOLD,
        EXTCARDRESPONSEFORMAT
    }

    public enum systemParamaters {
        CARDPRESENTINSTORETYPEID,
        CANCELPRINT,
        MASKCARDNUMBER,
        INVOICENUMBERMANDATORY,
        MINIMUMSTOREPURCHASE,
        CUSTOMERCHECKFORDEACTIVATE,
        CARDFORMATTYPEID,
        PURCHASERINFOMANDATORY,
        CARD_MAGIC,
        NUMERICUSERPWD,
        ALLOWCANCELACROSSBATCHES,
        ALLOWINTEGERAMOUNT,
        ALLOWCANCELACROSSOUTLETS,
        INTELLIGENTAPPROVALCODE,
        ALLOWMULTIPLECANCELREDEEMS,
        ALLOWPARTIALCANCELLATION,
        CUTOFFTIME,
        CURRENCYDECIMALDIGITSID,
        CURRENCYSYMBOL,
        CULTURENAMEID,
        CURRENCYPOSITIONID,
        DISPLAYUNITFORPOINTS,
        CURRENCYCODEID,
        CUSTOMERVALIDATIONNEEDEDFORREDEMPTION,
        INVOICENUMBERSEQUENCECHECK,
        DISCARDTRANSACTIONWITHSAMEREQUEST,
        ISOUTLETMANDATORYFORUSER,
        DISCARDREDEEMTRANSACTIONWITHDUPLICATEINVOICENUMBER,
        ALLOWUNIQUEMOBILENUMBERTOENROLL,
        ALLOWMULTIPLECANCELRELOADS,
        ALLOWMULTIPLEINIT,
        ALLOWCANCELISSUEORACTIVATE,
        ARCHIVECUSTOMERONCANCEL,
        ALLOWOUTLETNAMEOVERRIDE,
        ALLOWCARDHOLDERCAPTURE,
        ALLOWBALANCECHECKONALLCARDS,
        USEACTIVATEONLYTOREGISTER,
        TIMEZONEID,
        THRESHOLDFORTIMECOMPARISON,
        ALLOWACTIVATEONLYTHROUGHCARDPIN,
        UPDATECARDHOLDERONLYONACTIVATEONLY,
        LOGMASKEDCUSTOMERDATA,
        SENDADDITIONALCARDPARAMS,
        BULKACTIVATIONALLOWED,
        BOOKLETACTIVATIONALLOWED,
        REDEMPTIONPOSMACHINEID,
        MERCHANTLOGOURL,
        ALTERTRANSACTIONAMOUNT,
        ALLOWIDEMPOTENTTRANSACTIONS,
        IDEMPOTENCYVALIDITY,
        OVERRIDEIDEMPOTENTRESPONSE,
        IDEMPOTENCYREPROCESSFAILED,
        BYPASSUSERAUTHENTICATION,
        BYPASSAUTHUSERNAME,
        DONOTUPDATECUSTOMER,
        ALLOCATIONCHECKAGAINSTPOSTINGOUTLET,
        MERCHANTSUPPORTRESALE,
        CUSTOMCARDFORMAT,
        GETCARDFROMENCRYPTEDEXTCARDNUMBER,
        ISPARTIALINWARDENABLED,
        ISPANMANDATORY,
        MINIMUMPANAMOUNT,
        ISPONUMBERAUTOGENERATED,
        PONUMBERPREFIXMETHOD,
        PONUMBERPREFIXCUSTOMVALUE,
        ALLOWPONUMBEREDIT,
        SEPARATOR,
        SHOWPAYMENTPANEL,
        DONOTUPDATEEXTENDEDCUSTOMER,
        DONOTUPDATEBATCHSUMMARYFORWEBPOS,
        ISINVOICENUMBERAUTOGENERATED,
        INVOICENUMBERPREFIXMETHOD,
        INVOICENUMBERPREFIXCUSTOMVALUE,
        ALLOWINVOICENUMBEREDIT,
        INVOICESEPARATOR,
        BYPASSBILLAMOUNTCHECK,
        CATGORYSELECTIONMANDATORY,
        DONOTUPDATEBATCHSUMMARYFORSTOREPOS,
        USEMULTITRANSACTIONFLOW,
        USEMULTITRANSACTIONFLOWFORMULTIREDEEM,
        SHOWGSTINFOINRECEIPT,
        USEINVOICEVALIDATION,
        ALLOWLOGFORCARDXACTIONHISTORY,
        ENABLECARDHOLDERINFO,
        ALLOWBALANCECHECKTHROUGHCARDPIN,
        SENDCURRENCYCODEINRESPONSE,
        ENABLEXNPTRANSACTIONFLOW,
        AUTHORIZETOKENVALIDITY
    }

    public List<HashMap<String, Object>> convertResultSetToList(ResultSet rs) throws SQLException {
        ResultSetMetaData md = rs.getMetaData();
        int columns = md.getColumnCount();
        List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
        while (rs.next()) {
            HashMap<String, Object> row = new HashMap<String, Object>(columns);
            for (int i = 1; i <= columns; ++i) {
                row.put(md.getColumnName(i), rs.getObject(i));
            }
            list.add(row);
        }
        return list;
    }

    private static Map<String, String> resultSetToMap(ResultSet resultSet) throws SQLException {
        ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
        HashMap<String, String> retMap = new HashMap<>();
        Object rsObj;
        while (resultSet.next()) {
            for (int i = 1; i <= resultSetMetaData.getColumnCount(); ++i) {
                // Below code is to check each column Data types
                if (!resultSetMetaData.getColumnTypeName(i).equals("bit")) {
                    rsObj = resultSet.getObject(i);
                } else {
                    rsObj = resultSet.getByte(i);
                }

                if (rsObj != null) retMap.put(resultSetMetaData.getColumnName(i), rsObj.toString());
                else retMap.put(resultSetMetaData.getColumnName(i), (String) rsObj);
            }
        }
        return retMap;
    }

    public static Map<String, String> getCardDetailsFromDB(String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from qc_egms_cards with (nolock) where CARDNUMBER= '" + cardNumber + "';";
        logger.info("Fetching card details from QC_EGMS_CARDS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card database values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getCardProgramGroupsDetailsFromDB(String cardProgramDesc)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select * from QC_EGMS_CARD_PROGRAM_GROUPS with (nolock) where CARDPROGRAMDESC= '"
                        + cardProgramDesc
                        + "';";
        logger.info(
                "Fetching card program group details from QC_EGMS_CARD_PROGRAM_GROUPS, using Query: "
                        + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info(" card program group database values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getMerchantDetailsFromDB(String merchantName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_MERCHANTS with (nolock) where MERCHANTNAME= N'" + merchantName + "';";
        logger.info("Fetching merchant details from QC_EGMS_MERCHANTS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static void setInitialCardLimitInDB(String cpgID, String merchantID, int amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum Initial value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MININITIALVALUE = "
                        + amount
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantID
                        + "';";

        logger.info("Fetching card details from QC_EGMS_CARDS, using query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMaxInitialCardLimitInDB(String cpgID, String merchantID, int amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum Initial value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MAXINITIALVALUE = "
                        + amount
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantID
                        + "';";

        logger.info("Fetching card details from QC_EGMS_CARDS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    private static boolean isKeyPresent(Map<String, String> merchantDetails, String key)
            throws FrameworkException {
        boolean isPresent = false;
        if (merchantDetails.containsKey(key)) {
            isPresent = true;
        } else {
            throw new FrameworkException("unable to find merchant name , Please check the merchant name");
        }
        return isPresent;
    }

    public static String getCardCustomerID(String cardNumber)
            throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> cardDetails = getCardDetailsFromDB(cardNumber);
        String cardCustomerID = cardDetails.get("CARDCUSTOMERID");
        return cardCustomerID;
    }

    public static Map<String, String> getCustomerDetailsFromDB(String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String cardCustomerID = getCardCustomerID(cardNumber);
        String query =
                "select * from QC_EGMS_CARD_CUSTOMER with (nolock) where CARDCUSTOMERID = '" + cardCustomerID + "';";
        logger.info("Fetching customer details from  QC_EGMS_CARD_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static Map<String, String> getXActionHeaderDetails(String transactionID, String transactionTypeID) throws SQLException, ConfigPropertyException, FrameworkException {
//    String query = "select top 1 * from QC_EGMS_XACTION_LOG where CARDNUMBER= '" + cardNumber + "' order by XACTIONID desc; ";
        String query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where POSXACTIONID= '" + transactionID + "' AND XACTIONTYPEID='" + transactionTypeID + "'" + "ORDER BY XACTIONID Desc;";

        logger.info("Fetching card - POSXACTIONID details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getValidationHeaderDetails(String transactionID, String transactionTypeID) throws SQLException, ConfigPropertyException, FrameworkException {
//    String query = "select top 1 * from QC_EGMS_XACTION_LOG where CARDNUMBER= '" + cardNumber + "' order by XACTIONID desc; ";
        String query = "select top 1 * from QC_EGMS_VALIDATION_LOG with (nolock) where POSXACTIONID= '" + transactionID + "' AND XACTIONTYPEID='" + transactionTypeID + "';";

        logger.info("Fetching card - POSXACTIONID details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getxactiondetails(String cardNumber) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where CARDNUMBER= '" + cardNumber + "' order by XACTIONID desc; ";

        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getxactiondetailsForReverseCNI(String transactionID,String xactionTypeId,String batchid) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where POSXACTIONID = '" + transactionID + "' and BATCHID = '" + batchid + "' and XACTIONTYPEID= '"
                + xactionTypeId +
                "' order by XACTIONID desc;";
        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getValidationDetailsForAllCards(String cardNumber) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_VALIDATION_LOG with (nolock) where CARDNUMBER= '" + cardNumber + "' order by VALIDATIONLOGID desc; ";

        logger.info("Fetching card details from QC_EGMS_VALIDATION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Validation log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getXactionResponseTimeDetails(String posId, String batchid)
            throws SQLException, FrameworkException, ConfigPropertyException {

        String query = "select top 1 * from QC_EGMS_XACTION_RESPONSE_TIME with (nolock) where POSID = '" + posId + "'and BATCHID = '" + batchid + "' order by XACTIONRESPONSETIMEID desc ;";

        logger.info("Fetching xaction response time details from QC_EGMS_XACTION_RESPONSE_TIME, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Xaction Response Time details: " + retMap);
        return retMap;
    }

    public static void setCardStatusInDB(String cardStatusId, String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card status in DB");
        String query =
                "UPDATE QC_EGMS_CARDS SET CARDSTATUSID = "
                        + cardStatusId
                        + " WHERE "
                        + "CARDNUMBER = '"
                        + cardNumber +
                        "';";

        logger.info("Executing the query " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

//    public static void enableSendBarcodeInResponse(String trueOrFalse)
//            throws SQLException, FrameworkException, ConfigPropertyException {
//        String cpgDesc = getAPITestSetData("cpg");
//        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
//        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
//        String merchnatName = getAPITestSetData("merchantName");
//        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
//        String merchantID = merchantDetails.get("MERCHANTID");
//        setEnableBarcodeInResponseinDB(cpgID, merchantID, trueOrFalse);
//    }

    public static void setEnableBarcodeInResponseinDB(String cpgID, String merchantID, String key)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting barcode in response in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET BARCODEINRESPONSEENABLED = "
                        + key
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantID
                        + "';";

        logger.info("Setting enable in barcode response in giftcard settings " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setSystemParameterFlag(String flag, String value)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "";
        if (value.equals("₹")) {
            query =
                    "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                            + "nchar(0x20B9)"
                            + " WHERE "
                            + "MERCHANTID='"
                            + merchantID
                            + "';";
        } else if (value.equalsIgnoreCase("null")) {

            query =
                    "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "MERCHANTID='"
                            + merchantID
                            + "';";
        } else if (flag.equalsIgnoreCase("CURRENCYSYMBOL")) {
            query =
                    "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = N'"
                            + value
                            + "' WHERE "
                            + "MERCHANTID='"
                            + merchantID
                            + "';";
        } else if (flag.equalsIgnoreCase("CARDFORMATTYPEID")) {
            String cardFormatTypeId = getCardFormatTypeId(value);
            query = "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET CARDFORMATTYPEID = '" + cardFormatTypeId + "' WHERE MERCHANTID = '" + merchantID + "'";
        } else {
            query =
                    "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "MERCHANTID='"
                            + merchantID
                            + "';";
        }
        logger.info("Setting flag in system parameters " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getCardFormatTypeId(String cardFormatName) throws SQLException, ConfigPropertyException, FrameworkException {
        String cardFormatTypeId = null;
        String query = "SELECT CARDFORMATTYPEID FROM QC_EGMS_CARD_FORMAT_LK with (nolock) where CARDFORMATNAME = '" + cardFormatName + "';";
        cardFormatTypeId = DBConnectionManager.getQueryResultAsStringMap(query).get("CARDFORMATTYPEID");
        return cardFormatTypeId;
    }

    public static String getCpgIdFromDB(String cpgName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String cpgId = cpgDetails.get("CARDPROGRAMGROUPID");
        return cpgId;
    }

    public static String getIssuerIdFromDB(String cpgName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String issuerId = cpgDetails.get("ISSUERID");
        return issuerId;
    }

    public static String getMerchantOutletIdFromDB(String outletName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> cpgDetails = getMerchantOutletDetailsFromDB(outletName);
        String merchantOutletId = cpgDetails.get("MERCHANTOUTLETID");
        logger.info("OutletId is" + merchantOutletId);
        return merchantOutletId;
    }

    public static Map<String, String> getMerchantOutletDetailsFromDB(String merchantOutletName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_MERCHANT_OUTLETS with (nolock) where MERCHANTOUTLETNAME= '" + merchantOutletName + "';";
        logger.info("Fetching outlet details from QC_EGMS_MERCHANT_OUTLETS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static String getUserIdFromDB(String userName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> userDetails = getUserDetailsFromDB(userName);
        String userId = userDetails.get("USERID");
        return userId;
    }

    public static Map<String, String> getUserDetailsFromDB(String userName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String orgName = getAPITestSetData("orgName");
        String orgId = getOrgIdFromDB(orgName);
        userName = userName.toUpperCase();
        Connection conn = DBPoolProvider.getConnection();
        String query = "select * from QC_EGMS_USERS with (nolock) where USERLOGIN=? and ORGID='" + orgId + "';";
        PreparedStatement ps = conn.prepareStatement(query);
        ps.setNString(1, userName);
        ResultSet result = ps.executeQuery();
        Map<String, String> retMap = DBConnectionManager.resultSetToStringMap(result);
        logger.info(String.valueOf(retMap));
        if (ps != null) {
            ps.close();
        }

        if (conn != null) {
            conn.close();
        }
        return retMap;
    }

    public static String getUserRoleIdFromDB(String userName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> userDetails = getUserDetailsFromDB(userName);
        String userRoleId = userDetails.get("USERROLEID");
        return userRoleId;
    }

    public static String getOrgIdFromDB(String orgName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> orgDetails=null;
        if(orgName.equalsIgnoreCase("orgName"))
        {
            orgDetails=getQcOrgDetailsFromDB(orgName);
        }
        else {
            orgDetails = getOrgDetailsFromDB(orgName);
        }
        String orgId = orgDetails.get("ORGID");
        return orgId;
    }

    public static Map<String, String> getOrgDetailsFromDB(String orgName) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        String query = "select * from QC_EGMS_ORGS with (nolock) where ORGNAME= '" + orgName +
                "' and MERCHANTID='" + merchantId + "';";
        logger.info("Fetching org details from QC_EGMS_ORGS, using Query: " + query);
        logger.info("Orgname is " + orgName);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static String getMerchantIdFromDB(String merchantName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchantName);
        String merchantId = merchantDetails.get("MERCHANTID");
        return merchantId;
    }

    public static String getPosIdFromDB(String posName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> posDetails = getPosDetailsFromDB(posName);
        String posId = posDetails.get("POSID");
        logger.info("PosId obtained is : " + "" + posId);
        return posId;
    }

    public static Map<String, String> getPosDetailsFromDB(String posName) throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_POS with (nolock) where POSNAME= '" + posName + "';";
        logger.info("Fetching pos details from QC_EGMS_POS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static Map<String, String> getNumberOfFailedPinAttemptsFromDB(String cardId)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("CardID to be passed is  " + "" + cardId);
        String query = "select * from QC_EGMS_CARD_VELOCITY_LOG with (nolock) where CARDID= '" + cardId + "';";
        logger.info("Fetching details from QC_EGMS_CARD_VELOCITY_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Values obtained : " + retMap);
        return retMap;
    }

    public static void setGiftcardParameterFlag(String flag, String value, String param) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String cpgName = "";
        switch (param) {
            case "cpg1":
                cpgName = getAPITestSetData("cpg1");
                break;
            case "cpg2":
                cpgName = getAPITestSetData("cpg2");
                break;
            case "cpg3":
                cpgName = getAPITestSetData("cpg3");
                break;
            case "cpg8":
                cpgName = getAPITestSetData("cpg8");
                break;
            case "cpg13":
                cpgName = getAPITestSetData("cpg13");
                break;
            case "cpg14":
                cpgName = getAPITestSetData("cpg14");
                break;
            case "cpg17":
                cpgName = getAPITestSetData("cpg17");
                break;
            case "cpg19":
                cpgName = getAPITestSetData("cpg19");
                break;
            case "cpg20":
                cpgName = getAPITestSetData("cpg20");
                break;
            case "cpg21":
                cpgName = getAPITestSetData("cpg21");
                break;
            case "cpg22":
                cpgName = getAPITestSetData("cpg22");
                break;
            case "cpg23":
                cpgName = getAPITestSetData("cpg23");
                break;
            case "cpg24":
                cpgName = getAPITestSetData("cpg24");
                break;
            case "cpg26":
                cpgName = getAPITestSetData("cpg26");
                break;
            case "cpg27":
                cpgName = getAPITestSetData("cpg27");
                break;
            case "cpg31":
                cpgName = getAPITestSetData("cpg31");
                break;
            case "cpg32":
                cpgName = getAPITestSetData("cpg32");
                break;
            case "cpg6":
                cpgName = getAPITestSetData("cpg6");
                break;
            case "cpg38":
                cpgName = getAPITestSetData("cpg38");
                break;
            case "cpg39":
                cpgName = getAPITestSetData("cpg39");
                break;
            case "cpg41":
                cpgName = getAPITestSetData("cpg41");
                break;
            case "cpg45":
                cpgName = getAPITestSetData("cpg45");
                break;
            case "cpg46":
                cpgName = getAPITestSetData("cpg46");
                break;
            case "cpg47":
                cpgName = getAPITestSetData("cpg47");
                break;
            case "cpg48":
                cpgName = getAPITestSetData("cpg48");
                break;
            case "cpg49":
                cpgName = getAPITestSetData("cpg49");
                break;
            case "cpg50":
                cpgName = getAPITestSetData("cpg50");
                break;
            default:
                logger.info("Proper cpg name not provoided ");
        }
        String merchantId = getMerchantIdFromDB(merchantName);
        String cpgID = getCpgIdFromDB(cpgName);
        String query = null;
        if (value == null) {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        }

        logger.info("Setting flag in giftcard settings in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCPGvalue(String flag, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData("cpg");
        String cpgID = getCpgIdFromDB(cpgName);
        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET " + flag + " = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting CPGStatusId flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMerchantStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        logger.info("Setting Merchant status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_MERCHANTS SET MERCHANTSTATUSID = '"
                        + value
                        + "' WHERE "
                        + "MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting MerchantStatusId flag in QC_EGMS_MERCHANTS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMerchantOutletStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String outletName = getAPITestSetData("MerchantOutletName");
        String outletId = getMerchantOutletIdFromDB(outletName);
        logger.info("Setting Outlet status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_MERCHANT_OUTLETS SET MERCHANTOUTLETSTATUSID = "
                        + value
                        + " WHERE "
                        + " MERCHANTOUTLETID='"
                        + outletId
                        + "';";

        logger.info("Setting MerchantOutletStatusId flag in QC_EGMS_MERCHANT_OUTLETS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setPosStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        String posName = getAPITestSetData("WebPosName");
        String posId = getPosIdFromDB(posName);
        logger.info("Setting Pos status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_POS SET POSSTATUSID = '"
                        + value
                        + "' WHERE "
                        + "MERCHANTID='"
                        + merchantId
                        + "' and POSID='"
                        + posId
                        + "';";

        logger.info("Setting PosStatusId flag in QC_EGMS_POS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCpgMapStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData("cpg");
        String cpgID = getCpgIdFromDB(cpgName);
        logger.info("Setting Cpg Map status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS_CARD_PROGRAMS_MAP SET STATUS = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting CpgMapStatusId flag in QC_EGMS_CARD_PROGRAM_GROUPS_CARD_PROGRAMS_MAP table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setUserStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String orgName = getAPITestSetData("orgName");
        String orgID = getOrgIdFromDB(orgName);
        String userName = getAPITestSetData("userName");
        String userID = getUserIdFromDB(userName);
        logger.info("Setting User status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_USERS SET USERSTATUSID = '"
                        + value
                        + "' WHERE "
                        + "ORGID='"
                        + orgID
                        + "' and USERID='"
                        + userID
                        + "';";

        logger.info("Setting UserStatusId flag in QC_EGMS_USERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setOrgStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String orgName = getAPITestSetData("orgName");
        String orgID = getOrgIdFromDB(orgName);
        logger.info("Setting Org status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_ORGS SET ORGSTATUSID = '"
                        + value
                        + "' WHERE "
                        + "ORGID='"
                        + orgID
                        + "';";

        logger.info("Setting OrgStatusId flag in QC_EGMS_ORGS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCardPinValidationTypeIdFlagInGiftCardParametersTable(String state, String value, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        logger.info("Setting CardPinValidationTypeId in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET CARDPINVALIDATIONTYPEID = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting CardPinValidationTypeId flag in QC_EGMS_GIFTCARD_PARAMETERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCardPinValidationTypeIdFlagInTransactionTypePrivTable(String state, String value, String txnName, int xactiontypeId)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData("CPG");
        String cpgID = getCpgIdFromDB(cpgName);
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        logger.info("Setting CardPinValidationTypeId in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_TRANSACTIONTYPE_PRIV SET CARDPINVALIDATIONTYPEID = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID='"
                        + merchantId
                        + "' and TRANSACTIONTYPEID = '"
                        + xactiontypeId
                        + "';";

        logger.info("Setting CardPinValidationTypeId flag in QC_EGMS_TRANSACTIONTYPE_PRIV table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getTransactionTypeDetailsFromDB(String transactionName) throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_XACTION_TYPES_LK with (nolock) where XACTIONTYPEDESC= '" + transactionName + "';";
        logger.info("Fetching xactiontype details from QC_EGMS_XACTION_TYPES_LK, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static void setPrivilegeforRolesTransactionFlag(String state, String stateVal, String txnName, int xactiontypeId) throws SQLException, FrameworkException, ConfigPropertyException {
        String orgName = getAPITestSetData("orgName");
        String orgID = getOrgIdFromDB(orgName);
        String userName = getAPITestSetData("userName");
        String userRoleID = getUserRoleIdFromDB(userName);
        logger.info("Setting PrivilegeforRolesTransaction in DB to " + "" + stateVal);
        String query =
                "UPDATE QC_EGMS_ROLES_XACTION_PRIV SET PRIVILEGE = "
                        + stateVal
                        + " WHERE "
                        + "USERROLEID = '"
                        + userRoleID
                        + "' and TRANSACTIONTYPEID = '"
                        + xactiontypeId
                        + "' and ORGID = '"
                        + orgID
                        + "';";

        logger.info("Setting PrivilegeforRolesTransaction flag in QC_EGMS_TRANSACTIONTYPE_PRIV table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setNumberOfFailedPinAttemptsFlagInGiftCardParametersTable
            (String PinValidationType, String PinTypeValue, String FailedAttempts, String NumFailAttempts) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData("cpg");
        String cpgID = getCpgIdFromDB(cpgName);
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        logger.info("Setting NumberOfFailedPinAttempts in DB to " + "" + NumFailAttempts);
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET NUMBEROFFAILEDPINATTEMPTS = "
                        + NumFailAttempts
                        + ","
                        + "CARDPINVALIDATIONTYPEID = "
                        + PinTypeValue
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting NumberOfFailedPinAttempts flag in QC_EGMS_GIFTCARD_PARAMETERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setSendRecentTransactionsFlagInGiftCardParametersTable
            (String state, String value, String RecentTxns, String RecentTxnsValue) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData("cpg");
        String cpgID = getCpgIdFromDB(cpgName);
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        logger.info("Setting RecentTxnsValue in DB to " + "" + RecentTxnsValue);
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET SENDRECENTTRANSACTIONS = "
                        + value
                        + ","
                        + "NUMBEROFRECENTTRANSACTIONS = "
                        + RecentTxnsValue
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting SendRecentTransactions flag in QC_EGMS_GIFTCARD_PARAMETERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getValidationDetails(String batchId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select RESPONSECODE from QC_EGMS_VALIDATION_LOG with (nolock) where BATCHID= '" + batchId + "' order by VALIDATIONLOGID desc; ";
        logger.info("Fetching card details from QC_EGMS_VALIDATION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("validation log table values: " + retMap);
        return retMap;
    }

    public static String getCurrentOrPastOrFutureDate(int byDay, String format) {
        String result = "";
        Date date = new Date();
        Calendar calender = Calendar.getInstance();
        calender.setTime(date);
        calender.add(Calendar.DAY_OF_YEAR, byDay);
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        result = sdf.format(calender.getTime()).toString();
        return result;
    }

    public boolean validateDoubleInputValue(Double doubleNnmber) {
        String DOUBLE_PATTERN = "[0-9]+(\\.){0,1}[0-9]*";
        String strDoubleNumber = String.valueOf(doubleNnmber);
        if (Pattern.matches(DOUBLE_PATTERN, strDoubleNumber)) {
            return true;
        } else {
            return false;
        }
    }

    public static Map<String, String> getStoredValueDetails(String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {

        Map<String, String> cardDetails = getCardDetailsFromDB(cardNumber);

        String cardID = cardDetails.get("CARDID");
        String query = "select * from QC_EGMS_GIFTCARD_STOREDVALUES with (nolock) where cardid= '" + cardID + "';";

        logger.info("Fetching gift card details from QC_EGMS_GIFTCARD_STOREDVALUES, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Card Store value details: " + retMap);
        return retMap;
    }

    public static Map<String, String> getExpiryCardDetails(String cpgName) throws SQLException, ConfigPropertyException, FrameworkException {
//    String query = "select NUMBEROFDAYSFORCARDEXPIRY from QC_EGMS_GIFTCARD_PARAMETERS where CARDPROGRAMGROUPID = (select CARDPROGRAMGROUPID from QC_EGMS_CARD_PROGRAM_GROUPS where CARDPROGRAMDESC = '" + cpgName +"');";
        String query = "select * from QC_EGMS_GIFTCARD_PARAMETERS with (nolock) where CARDPROGRAMGROUPID = (select CARDPROGRAMGROUPID from QC_EGMS_CARD_PROGRAM_GROUPS with (nolock) where CARDPROGRAMDESC = '" + cpgName + "');";

        logger.info("Fetching card - POSXACTIONID details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getCurrencyCodeDetails(String currencysymbol)
            throws SQLException, FrameworkException, ConfigPropertyException {

        String query = "select top 1 * from qc_egms_currency_code_lk with (nolock) where CURRENCYCODE= '" + currencysymbol + "';";

        logger.info("Fetching currency details from qc_egms_currency_code_lk, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("currency details: " + retMap);
        return retMap;
    }

    public static Map<String, String> getExtAttributeDetails(String extSetName, String attributeKey) throws SQLException, ConfigPropertyException, FrameworkException {

        String query = "select top 1 * from QC_EGMS_EXT_ATTRIBUTE with (nolock) where EXTSETID = (select EXTSETID from QC_EGMS_EXT_SET with (nolock) where EXTNAMESPACE ='" + extSetName + "') and ATTRIBUTEKEY= '" + attributeKey + "';";

        logger.info("Fetching ExtAttributeDetails from QC_EGMS_EXT_ATTRIBUTE, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Attribute Details: " + retMap);
        return retMap;
    }

    public static LinkedHashMap<Integer, LinkedHashMap<String, String>> getXactionValues(String xactionId, String extAttributeId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select * from QC_EGMS_EXT_ATTRIBUTE_XACTION_VALUE with (nolock) where XACTIONID= '" + xactionId + "' and EXTATTRIBUTEID='" + extAttributeId + "';";
        logger.info("Fetching extension parameter values from QC_EGMS_EXT_ATTRIBUTE_XACTION_VALUE, using Query: " + query);
        ResultSet rset = getQueryResults(query);
        ResultSetMetaData resultSetMetaData = rset.getMetaData();
        int countCol = resultSetMetaData.getColumnCount();
        LinkedHashMap<Integer, LinkedHashMap<String, String>> dbData = new LinkedHashMap<>();

        while (rset.next()) {
            LinkedHashMap<String, String> rowData = new LinkedHashMap<>();
            for (int col = 1; col < countCol + 1; col++) {
                String colname = rset.getMetaData().getColumnName(col);
                rowData.put(colname, rset.getString(col));
            }
            int rowV = rset.getRow();
            dbData.put(rowV, rowData);
        }
        logger.info("Extension parameter values : " + dbData);
        return dbData;
    }

    public static LinkedHashMap<Integer, LinkedHashMap<String, String>> getCardValues(String cardId, String extAttributeId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select * from QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE with (nolock) where CARDID= '" + cardId + "' and EXTATTRIBUTEID='" + extAttributeId + "';";
        logger.info("Fetching extension parameter values from QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE, using Query: " + query);
        ResultSet rset = getQueryResults(query);
        ResultSetMetaData resultSetMetaData = rset.getMetaData();
        int countCol = resultSetMetaData.getColumnCount();
        LinkedHashMap<Integer, LinkedHashMap<String, String>> dbData = new LinkedHashMap<>();

        while (rset.next()) {
            LinkedHashMap<String, String> rowData = new LinkedHashMap<>();
            for (int col = 1; col < countCol + 1; col++) {
                String colname = rset.getMetaData().getColumnName(col);
                rowData.put(colname, rset.getString(col));
            }
            int rowV = rset.getRow();
            dbData.put(rowV, rowData);
        }
        logger.info("Extension parameter values : " + dbData);
        return dbData;
    }

    public static LinkedHashMap<Integer, LinkedHashMap<String, String>> getValidationValues(String validationLogId, String extAttributeId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select * from QC_EGMS_EXT_ATTRIBUTE_VALIDATION_LOG_VALUE with (nolock) where VALIDATIONLOGID= '" + validationLogId + "' and EXTATTRIBUTEID='" + extAttributeId + "';";
        logger.info("Fetching extension parameter values from QC_EGMS_EXT_ATTRIBUTE_VALIDATION_LOG_VALUE, using Query: " + query);
        ResultSet rset = getQueryResults(query);
        ResultSetMetaData resultSetMetaData = rset.getMetaData();
        int countCol = resultSetMetaData.getColumnCount();
        LinkedHashMap<Integer, LinkedHashMap<String, String>> dbData = new LinkedHashMap<>();

        while (rset.next()) {
            LinkedHashMap<String, String> rowData = new LinkedHashMap<>();
            for (int col = 1; col < countCol + 1; col++) {
                String colname = rset.getMetaData().getColumnName(col);
                rowData.put(colname, rset.getString(col));
            }
            int rowV = rset.getRow();
            dbData.put(rowV, rowData);
        }
        logger.info("Extension parameter values: " + dbData);
        return dbData;
    }

    public static Map<String, String> getvalidationdetailsForCard(String xactionid, String cardNumber) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_VALIDATION_LOG with (nolock) where POSXACTIONID= '" + xactionid + "' and CARDNUMBER='" + cardNumber + "' order by VALIDATIONLOGID desc; ";

        logger.info("Fetching card details from QC_EGMS_VALIDATION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("validation log table values: " + retMap);
        return retMap;
    }

    public static void setCardIssuerFlag(String flag, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String cpgName = getAPITestSetData("CPG");
        String merchantId = getMerchantIdFromDB(merchantName);
        String issuerId = getIssuerIdFromDB(cpgName);
        String query = "";
        if (flag.equalsIgnoreCase("USEACTIVATINGMERCHANTSTIMEZONE"))
        {
            merchantName = getAPITestSetData("IssuerMerchant");
            cpgName = getAPITestSetData("cpg19");
            merchantId = getMerchantIdFromDB(merchantName);
            issuerId = getIssuerIdFromDB(cpgName);
        }
        if (value.equals("₹")) {
            query =
                    "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = "
                            + "nchar(0x20B9)"
                            + " WHERE "
                            + "ISSUERID = '"
                            + issuerId
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        } else if (value.equalsIgnoreCase("null")) {
            query =
                    "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "ISSUERID = '"
                            + issuerId
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        } else if (flag.equalsIgnoreCase("CURRENCYSYMBOL") && !value.equalsIgnoreCase("null")) {
            query =
                    "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = N'"
                            + value
                            + "' WHERE "
                            + "ISSUERID = '"
                            + issuerId
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "ISSUERID = '"
                            + issuerId
                            + "' and MERCHANTID='"
                            + merchantId
                            + "';";
        }
        logger.info("Setting currency conversion flag in card issuer in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void iSetCurrencyDetailsInIssuer(String currencyCodeId, String currencySymbol) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String cpgName = getAPITestSetData("CPG");
        String merchantId = getMerchantIdFromDB(merchantName);
        String issuerId = getIssuerIdFromDB(cpgName);
        String query =
                "UPDATE QC_EGMS_CARD_ISSUER SET CURRENCYCODEID = "
                        + currencyCodeId
                        + " , CURRENCYSYMBOL = '"
                        + currencySymbol
                        + "' WHERE "
                        + "ISSUERID = '"
                        + issuerId
                        + "' and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting currency details in card issuer in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void iSetCurrencyDetailsInSystemParameters(String currencyCodeId, String currencySymbol) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query =
                "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET CURRENCYCODEID = "
                        + currencyCodeId
                        + " , CURRENCYSYMBOL = N'"
                        + currencySymbol
                        + "' WHERE "
                        + "MERCHANTID='"
                        + merchantID
                        + "';";
        logger.info("Setting currency details in system parameters in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setIsActiveInCurrencyMapping(String flag, String value, String Id, String entityTypeId) throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "UPDATE QC_EGMS_ENTITY_CURRENCY_MAPPING SET " + flag + " = "
                        + value
                        + " WHERE "
                        + "ENTITYID='"
                        + Id
                        + "' and ENTITYTYPEID='"
                        + entityTypeId
                        + "';";
        logger.info("Setting isactive flag in entity currency mapping  for isuuer in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getSettingId(String settingName) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "SELECT * FROM QC_EGMS_GLOBAL_SETTING_LK with (NOLOCK) WHERE SETTINGNAME = '" + settingName + "';";

        logger.info("Fetching settingID from QC_EGMS_GLOBAL_SETTING_LK, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Batch summary value details: " + retMap);
        return retMap;
    }

    public static void setDefaultCurrencyInGlobalSetting(String currencyCodeId, String settingId) throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "UPDATE QC_EGMS_GLOBAL_SETTING_VALUE  SET SETTINGVALUE  = "
                        + currencyCodeId
                        + " WHERE "
                        + "SETTINGID='"
                        + settingId
                        + "';";
        logger.info("Setting Default Currency In Global Setting  in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void updateBlackoutDatesInCardValueTable(String cardId, String extAttributeId, String value1, String value2, int i) throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "update QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE SET VALUE1 = '" + value1 + "', VALUE2 = '" + value2 + "' where EXTATTRIBUTECARDVALUEID=(select EXTATTRIBUTECARDVALUEID  from QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE where EXTATTRIBUTEID='" + extAttributeId + "' and CARDID='" + cardId + "'\n" +
                        "order by EXTATTRIBUTECARDVALUEID\n" +
                        "OFFSET " + i + " ROWS\n" +
                        "FETCH NEXT 1 ROWS ONLY )";
        logger.info("Updating BlackOutDates in Cards Value Table: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setEXTSETStatusIdFlag(String state, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String extNameSpace = getAPITestSetData("extNameSpace");
        logger.info("Setting EXTSET status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_EXT_SET SET STATUS = "
                        + value
                        + " WHERE "
                        + "EXTNAMESPACE='"
                        + extNameSpace
                        + "';";

        logger.info("Setting EXTSETSTATUS flag in QC_EGMS_EXT_SET table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMaximumInitialFloatAmountInDB(String cpg, float amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = null;
        if (isKeyPresent(merchantDetails, "MERCHANTID")) {
            merchantID = merchantDetails.get("MERCHANTID");
        }
        setMaxInitialCardLimitInDBFloatvalue(cpgID, merchantID, amount);
    }

    public static void setMaxRedemptionLimitInDBForDefault(String cpg, String amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setMaxRedemptionLimitInDB(cpgID, merchantID, amount);
    }

    public static void setMaxRedemptionLimitInDB(String cpgID, String merchantID, String amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Maximum Redeem value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MAXLIMITFORREDEMPTION = '"
                        + amount
                        + "' WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID="
                        + merchantID
                        + ";";

        logger.info("Setting the MAXLIMITFORREDEMPTION from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMinRedemptionLimitInDBForDefault(String cpg, String amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setMinRedeemCardLimitInDB(cpgID, merchantID, amount);
    }

    public static void setMinRedeemCardLimitInDB(String cpgID, String merchantID, String amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum redeem value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MINLIMITFORREDEMPTION = '"
                        + amount
                        + "' WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID="
                        + merchantID
                        + ";";

        logger.info("Setting the MINLIMITFORREDEMPTION from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMaxInitialCardLimitInDBFloatvalue(String cpgID, String merchantID, float amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum Initial value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MAXINITIALVALUE = "
                        + amount
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantID
                        + "';";

        logger.info("Fetching card details from QC_EGMS_CARDS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMininiumInitialFloatAmountInDB(String cpg, float amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setInitialCardLimitInDBFloatValue(cpgID, merchantID, amount);
    }

    public static void setInitialCardLimitInDBFloatValue(String cpgID, String merchantID, float amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum Initial value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MININITIALVALUE = "
                        + amount
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantID
                        + "';";

        logger.info("Fetching card details from QC_EGMS_CARDS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setExtensionSetModuleMapStatusIdFlag(String extSetId, String value, String flag) throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting EXTSetModuleMap status in DB to " + "" + value);
        String query = "UPDATE QC_EGMS_EXT_SET_MODULE_MAP SET " + flag + " ="
                + value
                + " WHERE  EXTSETID='" + extSetId + "';";
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getExteSetIdFromDB(String extNameSpace) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "Select * from QC_EGMS_EXT_SET with (nolock) WHERE EXTNAMESPACE='" + extNameSpace + "';";
        logger.info("Fetching  EXTSetID from QC_EGMS_EXT_SET, using Key: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String exteSetId = retMap.get("EXTSETID");
        return exteSetId;
    }

    public static void setExtensionparametersBooleaninTable(String value, String extAttributeId) throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting EXTSetModuleMap status in DB to " + "" + value);
        String query = "UPDATE QC_EGMS_EXT_ATTRIBUTE_VALUE SET VALUE1='" + value + "' WHERE EXTATTRIBUTEID='" + extAttributeId + "';";
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getExtAttributeId(String parameter, String extSetId) throws SQLException, FrameworkException, ConfigPropertyException {

        logger.info("Setting EXTSetModuleMap status in DB to " + "" + parameter);
        String query = "SELECT * FROM QC_EGMS_EXT_ATTRIBUTE with (NOLOCK) WHERE DISPLAYNAME='" + parameter + "' AND EXTSETID='" + extSetId + "';";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String extAttributeId = retMap.get("EXTATTRIBUTEID");
        return extAttributeId;


    }

    public static void setCPGvalue(String flag, String value, String cpg) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgID = "";
        switch (cpg) {
            case "cpg1":
                cpg = getAPITestSetData("cpg1");
                break;
            case "cpg2":
                cpg = getAPITestSetData("cpg2");
                break;
            case "cpg3":
                cpg = getAPITestSetData("cpg3");
                break;
            case "cpg13":
                cpg = getAPITestSetData("cpg13");
                break;
            case "cpg14":
                cpg = getAPITestSetData("cpg14");
                break;
            case "cpg17":
                cpg = getAPITestSetData("cpg17");
                break;
            case "cpg15":
                cpg = getAPITestSetData("cpg15");
                break;
            case "cpg24":
                cpg = getAPITestSetData("cpg24");
            case "cpg32":
                cpg = getAPITestSetData("cpg32");
                break;
            case "cpg22":
                cpg = getAPITestSetData("cpg22");
                break;
            case "cpg6":
                cpg = getAPITestSetData("cpg6");
                break;
            case "cpg7":
                cpg = getAPITestSetData("cpg7");
                break;
            case "cpg9":
                cpg = getAPITestSetData("cpg9");
                break;
            case "cpg38":
                cpg = getAPITestSetData("cpg38");
                break;
            case "cpg39":
                cpg = getAPITestSetData("cpg39");
                break;
            case "cpg41":
                cpg = getAPITestSetData("cpg41");
                break;
            case "cpg45":
                cpg = getAPITestSetData("cpg45");
                break;
            case "cpg46":
                cpg = getAPITestSetData("cpg46");
                break;
            case "cpg47":
                cpg = getAPITestSetData("cpg47");
                break;
            case "cpg48":
                cpg = getAPITestSetData("cpg48");
                break;
            case "cpg49":
                cpg = getAPITestSetData("cpg49");
                break;
            case "cpg50":
                cpg = getAPITestSetData("cpg50");
                break;
            case "cpg23":
                cpg = getAPITestSetData("cpg23");
                break;
            default:
                logger.info("Proper cpg name not provoided ");
        }
        cpgID = getCpgIdFromDB(cpg);
        if (flag.equalsIgnoreCase("CORPORATEID")) {

            Map<String, String> corpDetails = getMerchantCorpDetailsFromDB(getAPITestSetData("corporateName1") == null ? getAPITestSetData("CorpName") : getAPITestSetData("corporateName1"));

            String corpID = corpDetails.get("CORPORATEID");
            value = corpID;
        }
        String query = null;
        if (value.equalsIgnoreCase("null")) {
            value = null;
            query =
                    "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "';";
        } else {

            query =
                    "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "';";
        }

        logger.info("Setting CPGStatusId flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static void setCpgMapStatusIdFlag(String state, String value, String cpgName) throws SQLException, FrameworkException, ConfigPropertyException {

        String cpgID = getCpgIdFromDB(cpgName);
        logger.info("Setting Cpg Map status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS_CARD_PROGRAMS_MAP SET STATUS = '"
                        + value
                        + "' WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting CpgMapStatusId flag in QC_EGMS_CARD_PROGRAM_GROUPS_CARD_PROGRAMS_MAP table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setRedeemStartDateInDBForDefault(String cpg, String date)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setRedeemStartDateInDB(cpgID, merchantID, date);
    }

    public static void setRedeemStartDateInDB(String cpgID, String merchantID, String date)
            throws SQLException, FrameworkException, ConfigPropertyException {

        logger.info("Setting redeem start date value in DB");
        String query = "";
        if (date != null) {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET REDEMPTIONBEGINDATE = '"
                            + date
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        } else {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET REDEMPTIONBEGINDATE = "
                            + date
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        }

        logger.info("Setting the REDEMPTIONBEGINDATE from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setRedeemEndDateInDBForDefault(String cpg, String date)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setRedeemEndDateInDB(cpgID, merchantID, date);
    }

    public static void setRedeemEndDateInDB(String cpgID, String merchantID, String date)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting redeem start date value in DB");
        String query = "";
        if (date != null) {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET REDEMPTIONENDDATE = '"
                            + date
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        } else {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET REDEMPTIONENDDATE = "
                            + date
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        }

        logger.info("Setting the REDEMPTIONBEGINDATE from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCardsNonTransferableInDBForDefault(String cpg, String value)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET CARDSNONTRANSFERABLE = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting CARDSNONTRANSFERABLE flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCardPinMandatoryInDBForDefault(String cpg, String value)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);
        Map<String, String> transactionMap = getTransactionTypeDetailsFromDB("GIFTCARD MULTIPLE REDEEM VALIDATE");
        String xactiontypeID = transactionMap.get("XACTIONTYPEID");

        String query =
                "UPDATE QC_EGMS_TRANSACTIONTYPE_PRIV SET CARDPINVALIDATIONTYPEID = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "' and TRANSACTIONTYPEID = '"
                        + xactiontypeID
                        + "';";

        logger.info("Setting CARDPINVALIDATIONTYPEID flag in QC_EGMS_TRANSACTIONTYPE_PRIV table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static void setStoredValuesTableValue(String param, String value, String cardID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "UPDATE QC_EGMS_GIFTCARD_STOREDVALUES SET " + param + " ="

                        + value
                        + " WHERE "
                        + "CARDID = '"
                        + cardID
                        + "';";
        logger.info("Setting giftcard stored value table in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void updateBlackoutDatesInExtAttributeValueTableAtCPGLevel(String cpg, String extSetName, String value1, String value2, int i) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgName = getAPITestSetData(cpg);
        String query = "update QC_EGMS_EXT_ATTRIBUTE_VALUE SET VALUE1 = '" + value1 + "', VALUE2 = '" + value2 + "' where EXTATTRIBUTEVALUEID=(select EXTATTRIBUTEVALUEID from QC_EGMS_EXT_ATTRIBUTE_VALUE\n" +
                "where ENTITYID = (\n" +
                "select CARDPROGRAMGROUPID\n" +
                "from QC_EGMS_CARD_PROGRAM_GROUPS\n" +
                "where CARDPROGRAMDESC='" + cpgName + "'\n" +
                ")\n" +
                "AND EXTATTRIBUTEID = (\n" +
                "select EXTATTRIBUTEID\n" +
                "from QC_EGMS_EXT_ATTRIBUTE\n" +
                "where EXTSETID = (\n" +
                "select EXTSETID from QC_EGMS_EXT_SET where EXTNAMESPACE = '" + extSetName + "'\n" +
                ") AND ATTRIBUTEKEY='BlackoutDates'\n" +
                ") order by EXTATTRIBUTEVALUEID\n" +
                "OFFSET " + i + " ROWS\n" +
                "FETCH NEXT 1 ROWS ONLY )";
        logger.info("Updating BlackOutDates in Ext Attribute Value Table at CPG Level: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void updateBooleanFlagsExtAttributeValueTableAtCPGLevel(String cpg, String extSetName, String attributeName, String value1) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgName = getAPITestSetData(cpg);
        String query = "update QC_EGMS_EXT_ATTRIBUTE_VALUE SET VALUE1 = '" + value1 + "', VALUE2 = NULL where EXTATTRIBUTEVALUEID=(select EXTATTRIBUTEVALUEID from QC_EGMS_EXT_ATTRIBUTE_VALUE\n" +
                "where ENTITYID = (\n" +
                "select CARDPROGRAMGROUPID\n" +
                "from QC_EGMS_CARD_PROGRAM_GROUPS\n" +
                "where CARDPROGRAMDESC='" + cpgName + "'\n" +
                ")\n" +
                "AND EXTATTRIBUTEID = (\n" +
                "select EXTATTRIBUTEID\n" +
                "from QC_EGMS_EXT_ATTRIBUTE\n" +
                "where EXTSETID = (\n" +
                "select EXTSETID from QC_EGMS_EXT_SET where EXTNAMESPACE = '" + extSetName + "'\n" +
                ") AND ATTRIBUTEKEY='" + attributeName + "'));";
        logger.info("Updating Boolean Flags in Ext Attribute Value Table at CPG Level: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setConsiderOutletCurrencyInDBForDefault(String cpg, String value)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET CONSIDEROUTLETCURRENCY = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting CONSIDEROUTLETCURRENCY flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getCardIdFromDB(String extAttributeCardValueId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "Select * from QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE with (nolock) WHERE EXTATTRIBUTECARDVALUEID='" + extAttributeCardValueId + "';";
        logger.info("Fetching  CardId from QC_EGMS_EXT_ATTRIBUTE_CARD_VALUE, using Key: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String cardId = retMap.get("CARDID");
        return cardId;
    }


    public static Map<String, String> getHolderDetailsFromDB(String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String cardHolderID = getCardHolderID(cardNumber);
        String query =
                "select * from QC_EGMS_CARD_CUSTOMER with (nolock) where CARDCUSTOMERID = '" + cardHolderID + "';";
        logger.info("Fetching holder details from  QC_EGMS_CARD_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static String getCardHolderID(String cardNumber)
            throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> cardDetails = getCardDetailsFromDB(cardNumber);
        String cardHolderID = cardDetails.get("CARDHOLDERID");
        return cardHolderID;
    }

    public static Map<String, String> getExtendedXactionLogDetails(String xactionID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query =
                "select * from QC_EGMS_EXTENDED_XACTION_LOG with (nolock) where XACTIONID = '" + xactionID + "';";
        logger.info("Fetching extended xaction log details from  QC_EGMS_EXTENDED_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static Map<String, String> getBeneficiaryLogDetails(String xactionId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_XACTION_BENEFICIARY_LOG with (nolock) where XACTIONID= '" + xactionId + "' order by XACTIONBENEFICIARYLOGID desc;";

        logger.info("Fetching ExtAttributeDetails from QC_EGMS_XACTION_BENEFICIARY_LOG, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Attribute Details: " + retMap);
        return retMap;
    }

    //Retrieve card customer details using CardCustomerID
    public static Map<String, String> getCardCustomerDetailsFromDB(String cardCustomerID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select * from QC_EGMS_CARD_CUSTOMER with (nolock) where CARDCUSTOMERID = '" + cardCustomerID + "';";
        logger.info("Fetching customer details from  QC_EGMS_CARD_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static Map<String, String> getCardCustomerDetailsFromDBWithMobile(String cardNo)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_CARD_CUSTOMER with (nolock) where MOBILE like '%" + cardNo + "%';";
        logger.info("Fetching card details from QC_EGMS_CARD_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card database values: " + retMap);
        return retMap;
    }

    public static void setMerchantCardProgramGroupsMapFlag(String flag, String value, String param)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String cpgName;
        if (param.equalsIgnoreCase("cpg1")) {
            cpgName = getAPITestSetData("cpg1");
        } else if (param.equalsIgnoreCase("cpg2")) {
            cpgName = getAPITestSetData("cpg2");
        } else if (param.equalsIgnoreCase("cpg18")) {
            cpgName = getAPITestSetData("cpg18");
        } else {
            cpgName = getAPITestSetData("cpg");
        }
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String cpgID = cpgDetails.get("CARDPROGRAMGROUPID");
        String query = "";
        if (value.equalsIgnoreCase("null")) {

            query =
                    "UPDATE QC_EGMS_MERCHANT_CARDPROGRAMGROUP_MAP SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_MERCHANT_CARDPROGRAMGROUP_MAP SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        }
        logger.info("Setting flag in merchant card program groups map " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getMerchantCardProgramGroupDetailsFromDB(String merchantName, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String cpgName = getAPITestSetData(cpg);
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String cpgID = cpgDetails.get("CARDPROGRAMGROUPID");
        String query = "select * from QC_EGMS_MERCHANT_CARDPROGRAMGROUP_MAP with (nolock) where CARDPROGRAMGROUPID= '" + cpgID + "' and MERCHANTID= '" + merchantID + "';";
        logger.info("Fetching merchant details from QC_EGMS_MERCHANTS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static void setCardsTable(String key, String value, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "", card;
        Map<String, String> svcDetails = getMerchantCardProgramGroupDetailsFromDB(merchnatName, cpg);
        card = svcDetails.get("MERCHANTCARDNUMBER");
        Map<String, String> cardDetails = getCardDetailsFromDB(card);
        String cardID = cardDetails.get("CARDID");
        setStoredValuesTableValue(key, value, cardID);
        logger.info("Setting stored gift value table " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static String getDynamicDate(String dateValue) {
        String date = "";
        if (StringUtils.containsIgnoreCase(dateValue, "DATE+")) {
            dateValue = dateValue.toUpperCase().replace("DATE+", "");
            date = getCurrentOrPastOrFutureDate(Integer.valueOf(dateValue), "yyyy-MM-dd");
        } else if (StringUtils.containsIgnoreCase(dateValue, "DATE-")) {
            dateValue = dateValue.toUpperCase().replace("DATE-", "");
            date = getCurrentOrPastOrFutureDate((-1) * Integer.valueOf(dateValue), "yyyy-MM-dd");
        }
        return date;
    }

    public static Map<String, String> getTimeZoneDetails(String timeZoneCode)
            throws SQLException, FrameworkException, ConfigPropertyException {

        String query = "select top 1 * from QC_EGMS_TIME_ZONES_LK with (nolock) where TIMEZONECODE= '" + timeZoneCode + "';";

        logger.info("Fetching Time zone details from QC_EGMS_TIME_ZONES_LK, using Query: " + query);

        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);

        logger.info("Time zone details: " + retMap);
        return retMap;
    }


    public static void setUserRole(String param, String value)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String userName = getAPITestSetData("userName");
        Map<String, String> userDetails = getUserDetailsFromDB(userName);
        String userid = userDetails.get("USERID");
        String query =
                "UPDATE QC_EGMS_USERS SET USERROLEID = "
                        + value
                        + " WHERE "
                        + "USERID='"
                        + userid
                        + "';";

        logger.info("Setting  user roles in user table " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCustomProc(String flag, String value, String xactionTypeId, String cpg) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String cpgName = getAPITestSetData(cpg);
        String merchantId = getMerchantIdFromDB(merchantName);
        String cpgID = getCpgIdFromDB(cpgName);
        String query =
                "UPDATE QC_EGMS_GIFT_CUSTOM_PROCEDURES SET " + flag + " = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "'"
                        + "and XACTIONTYPEID='"
                        + xactionTypeId
                        + "';";

        logger.info("Setting flag in custom procedure in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> validateIdempotencyCacheTable(String idempotencyKey) throws SQLException, ConfigPropertyException, FrameworkException {

        String query = "select * from QC_EGMS_IDEMPOTENCY_XACTION_CACHE with (nolock) where IDEMPOTENCYKEY= '" + idempotencyKey + "' order by IDEMXACTIONID desc; ";

        logger.info("Fetching card transaction details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Idempotency Cache table details: " + retMap);
        return retMap;
    }

    public static void setPosFlag(String flag, String value, String param) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String posname = "";
        if (param.equalsIgnoreCase("WebPosNameForProxy")) {
            posname = getAPITestSetData("WebPosNameForProxy");
        } else if (param.equalsIgnoreCase("DevicePos")) {
            posname = getAPITestSetData("DevicePosTerminalId");
        } else {
            posname = getAPITestSetData("WebPosName");
        }
        String merchantId = getMerchantIdFromDB(merchantName);
        String posID = getPosIdFromDB(posname);
        String query =
                "UPDATE QC_EGMS_POS SET " + flag + " = "
                        + value
                        + " WHERE "
                        + "POSID = '"
                        + posID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting flag in Pos table in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCustomProc(String flag, String value, String param) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String xactionTypeID = "";
        if (param.equalsIgnoreCase("UpdateExpiry")) {
            xactionTypeID = getAPITestSetData("UpdateExpiry");
        } else {
            xactionTypeID = getAPITestSetData("5");
        }
        String merchantId = getMerchantIdFromDB(merchantName);
        String cpgName = getAPITestSetData("cpg1");
        String cpgID = getCpgIdFromDB(cpgName);
        String query =
                "UPDATE QC_EGMS_GIFT_CUSTOM_PROCEDURES SET " + flag + " = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "' and XACTIONTYPEID='"
                        + xactionTypeID
                        + "' and MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting flag in custom procedures in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setOrgQcLoginTransactionFlag(String flag, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);

        logger.info("Setting Org status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_ORGS SET ALLOWQCLOGINTRANSACTIONS = '"
                        + value
                        + "' WHERE "
                        + "MERCHANTID='"
                        + merchantId
                        + "';";

        logger.info("Setting ALLOWQCLOGINTRANSACTIONS flag in QC_EGMS_ORGS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static Map<String, String> getxactiondetails(String cardNumber, String transactionID, String xactionTypeId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where CARDNUMBER= '" + cardNumber + "' and POSXACTIONID = '" + transactionID + "' and XACTIONTYPEID= '"
                + xactionTypeId +
                "' order by XACTIONID desc;";
        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static void setMerchantOutletSvcMapFlag(String flag, String value, String param)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        Map<String, String> outletDetails = getMerchantOutletDetailsFromDB(getAPITestSetData("MerchantOutletName"));
        String outletID = outletDetails.get("MERCHANTOUTLETID");
        String cpgName;
        if (param.equalsIgnoreCase("cpg1")) {
            cpgName = getAPITestSetData("cpg1");
        } else if (param.equalsIgnoreCase("cpg2")) {
            cpgName = getAPITestSetData("cpg2");
        } else {
            cpgName = getAPITestSetData("cpg");
        }
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String cpgID = cpgDetails.get("CARDPROGRAMGROUPID");
        String query = "";
        if (value.equalsIgnoreCase("null")) {

            query =
                    "UPDATE QC_EGMS_MERCHANT_OUTLET_SVC_MAP SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTOUTLETID = '"
                            + outletID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_MERCHANT_OUTLET_SVC_MAP SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "' and MERCHANTOUTLETID = '"
                            + outletID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        }
        logger.info("Setting flag in merchant outlet svc map " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getMerchantCorpDetailsFromDB(String merchantCorpName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_CORPORATES with (nolock) where CORPORATENAME= '" + merchantCorpName + "';";
        logger.info("Fetching outlet details from QC_EGMS_CORPORATES, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static void setMerchantCorpSvcMapFlag(String flag, String value)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        Map<String, String> corpDetails = getMerchantCorpDetailsFromDB(getAPITestSetData("CorpName"));
        String corpID = corpDetails.get("CORPORATEID");
        String query = "";
        if (value.equalsIgnoreCase("null")) {

            query =
                    "UPDATE QC_EGMS_MERCHANT_CORPORATE_SVC_MAP SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CORPORATEID = '"
                            + corpID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_MERCHANT_CORPORATE_SVC_MAP SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CORPORATEID = '"
                            + corpID
                            + "' and MERCHANTID='"
                            + merchantID
                            + "';";
        }
        logger.info("Setting flag in merchant corporate svc map " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static void setCardNumberAlgorithmIdInCardProgramGroupTable(String state, String value, String cpgName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgID = getCpgIdFromDB(cpgName);
        logger.info("Setting CardNumberAlgorithmId in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET CARDNUMBERGENALGORITHMID = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";
        logger.info("Setting CardNumberAlgorithmId flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static void setCardExpiryInDB(String cardexpiry, String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card expiry in DB");
        if (StringUtils.containsIgnoreCase(cardexpiry, "DATE")) {
            cardexpiry = getDynamicDate(cardexpiry);
        }
        String query =
                "UPDATE QC_EGMS_CARDS SET CARDEXPIRY = '"
                        + cardexpiry
                        + "' WHERE "
                        + "CARDNUMBER = '"
                        + cardNumber +
                        "';";

        logger.info("Executing the query " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void rolesTransPrivilage(String privilge, String orgName, String userRoleName) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "SELECT ORGID FROM QC_EGMS_ORGS with (NOLOCK) WHERE ORGNAME = '" + orgName + "'";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String query2 = "SELECT USERROLEID FROM QC_EGMS_USER_ROLES with (NOLOCK) WHERE USERROLEDESC = '" + userRoleName + "'";
        Map<String, String> retMap1 = DBConnectionManager.getQueryResultAsStringMap(query2);
        String query3 = "UPDATE QC_EGMS_ROLES_XACTION_PRIV SET PRIVILEGE = '" + privilge + "' WHERE ORGID = '" + retMap.get("ORGID") + "' AND USERROLEID = '" + retMap1.get("USERROLEID") + "'";
        int result = DBConnectionManager.executeUpdateQuery(query3);
        logger.info("Updating the QC_EGMS_ROLES_XACTION_PRIV using Query: " + query3);

    }

    public static void updateEncryptedExtCardNumber(String cardNumber, String cpg) throws ConfigPropertyException, FrameworkException, SQLException {
        logger.info("Update EncryptedExtCardNumber for given Card Number" + cardNumber);
        DataGenerator datafeeder = new DataGenerator();
        String cpgName = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgName);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
//        String query = "BEGIN" +
//                " DECLARE  @ENCRYPTEDEXTCARDNUMBER nvarchar(256)=" + datafeeder.getNum().digits(13) +
//                " UPDATE QC_EGMS_CARDS" +
//                " SET ENCRYPTEDEXTCARDNUMBER=@ENCRYPTEDEXTCARDNUMBER" +
//                " WHERE CARDNUMBER='" + cardNumber + "' AND CARDPROGRAMGROUPID=" + cpgID +
//                " END";
//        int rowCnt = DBConnectionManager.executeUpdateQuery(query);
//        Assert.assertEquals(rowCnt, 1);
        Connection conUpdateQuery = getConnection();
        PreparedStatement updateStatement = conUpdateQuery.prepareStatement("UPDATE QC_EGMS_CARDS SET ENCRYPTEDEXTCARDNUMBER= ? WHERE CARDNUMBER='" + cardNumber + "'");
        updateStatement.setNString(1, datafeeder.getNum().digits(13));
        updateStatement.executeUpdate();
    }

    //To retrieve encrypted external cards from QC_EGMS_CARDS
    public static String getEncryptedExtCardNumber(String cardNumber, String cpg) throws SQLException, ConfigPropertyException, FrameworkException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String query = "SELECT * FROM QC_EGMS_CARDS with (NOLOCK) WHERE CARDNUMBER='" + cardNumber + "' AND CARDPROGRAMGROUPID='" + cpgID + "'";
        logger.info("Fetching EncryptedExternalCardNumber from QC_EGMS_CARDS, using Key: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String encryptedExtCard = retMap.get("ENCRYPTEDEXTCARDNUMBER");
        return encryptedExtCard;
    }

    public static void setValueInGlobalSetting(String settingValue, String settingId) throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "UPDATE QC_EGMS_GLOBAL_SETTING_VALUE  SET SETTINGVALUE  = '"
                        + settingValue
                        + "' WHERE "
                        + "SETTINGID='"
                        + settingId
                        + "';";
        System.out.println(query);
        logger.info("Setting Value In Global Setting  in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);

    }

    public static void setTransactionTypePrivflag(String flag, String value, String txnName, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("State to be set is " + "" + value);
        Map<String, String> transactionMap = getTransactionTypeDetailsFromDB(txnName);
        String xactiontypeID = transactionMap.get("XACTIONTYPEID");
        String cpgName = null;
        switch (cpg) {
            case "cpg1":
                cpgName = getAPITestSetData("cpg1");
                break;
            case "cpg2":
                cpgName = getAPITestSetData("cpg2");
                break;
            case "cpg3":
                cpgName = getAPITestSetData("cpg3");
                break;
            case "cpg8":
                cpgName = getAPITestSetData("cpg8");
                break;
            case "cpg13":
                cpgName = getAPITestSetData("cpg13");
                break;
            case "cpg14":
                cpgName = getAPITestSetData("cpg14");
                break;
            case "cpg19":
                cpgName = getAPITestSetData("cpg19");
                break;
            case "cpg20":
                cpgName = getAPITestSetData("cpg20");
                break;
            case "cpg21":
                cpgName = getAPITestSetData("cpg21");
                break;
            case "cpg22":
                cpgName = getAPITestSetData("cpg22");
                break;
            case "cpg23":
                cpgName = getAPITestSetData("cpg23");
                break;
            case "cpg17":
                cpgName = getAPITestSetData("cpg17");
                break;
            case "cpg24":
                cpgName = getAPITestSetData("cpg24");
                break;
            case "cpg32":
                cpgName = getAPITestSetData("cpg32");
                break;
            case "cpg38":
                cpgName = getAPITestSetData("cpg38");
                break;
            case "cpg39":
                cpgName = getAPITestSetData("cpg39");
                break;
            case "cpg15":
                cpgName = getAPITestSetData("cpg15");
                break;
            case "cpg6":
                cpgName = getAPITestSetData("cpg6");
                break;
            default:
                logger.info("Proper cpg name not provoided ");
        }
        String cpgID = getCpgIdFromDB(cpgName);
        String merchantName = getAPITestSetData("merchantName");
        String merchantId = getMerchantIdFromDB(merchantName);

        String query = null;
        if (txnName.equalsIgnoreCase("All")) {
            query = "UPDATE QC_EGMS_TRANSACTIONTYPE_PRIV SET " + flag + " = "
                    + value
                    + " WHERE "
                    + "CARDPROGRAMGROUPID = "
                    + cpgID
                    + " and MERCHANTID='"
                    + merchantId
                    + "';";
        } else {
            query = "UPDATE QC_EGMS_TRANSACTIONTYPE_PRIV SET " + flag + " = "
                    + value
                    + " WHERE "
                    + "CARDPROGRAMGROUPID = "
                    + cpgID
                    + " and MERCHANTID='"
                    + merchantId
                    + "' and TRANSACTIONTYPEID = '"
                    + xactiontypeID
                    + "';";
        }
        logger.info("Setting " + flag + "flag in QC_EGMS_TRANSACTIONTYPE_PRIV table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);

    }

    public static Map<String, String> getCustomerXactiondetails(String cardNumber) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_egms_Customer_xaction_Log with (nolock) where CARDNUMBER= '" + cardNumber + "' order by XACTIONID desc; ";

        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static void setIsActiveflagInCardFormatTable(String flag, String value, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("State to be set is " + "" + value);
        String cpgName = null;
        if (cpg.equalsIgnoreCase("cpg1")) {
            cpgName = getAPITestSetData("cpg1");
        } else if (cpg.equalsIgnoreCase("cpg2")) {
            cpgName = getAPITestSetData("cpg2");
        } else {
            cpgName = getAPITestSetData(cpg);
        }
        String cpgID = getCpgIdFromDB(cpgName);

        String query = "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS_CARD_FORMAT set ISACTIVE = '" + value + "' WHERE CARDPROGRAMGROUPID = '" + cpgID + "';";

        logger.info("Setting " + flag + "flag in QC_EGMS_CARD_PROGRAM_GROUPS_CARD_FORMAT table " + "" + query);

        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getPinValidationTypeId(String validationDesc) throws ConfigPropertyException, FrameworkException, SQLException {
        String pinValidationTypeId = null;
        String query = "SELECT PINVALIDATIONTYPEID FROM QC_EGMS_CARD_PIN_VALIDATION_TYPE_LK WITH (NOLOCK) WHERE VALIDATIONDESCRIPTION = '" + validationDesc + "';";
        pinValidationTypeId = DBConnectionManager.getQueryResultAsStringMap(query).get("PINVALIDATIONTYPEID");
        logger.info("Fetching  PINVALIDATIONTYPEID from QC_EGMS_CARD_PIN_VALIDATION_TYPE_LK using Key: " + query);
        return pinValidationTypeId;
    }

    public static void Setcardpinvalidationtypeingcsettings(String flag, String value, String cpg)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("State to be set is " + "" + value);
        String cpgName = getAPITestSetData(cpg);
        String cpgID = getCpgIdFromDB(cpgName);
        String pinValidationTypeId = getPinValidationTypeId(value);
        String query = "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET CARDPINVALIDATIONTYPEID = '" + pinValidationTypeId + "'  WHERE CARDPROGRAMGROUPID = '" + cpgID + "'";
        logger.info("Setting " + flag + " in QC_EGMS_GIFTCARD_PARAMETERS table " + "" + query);

        logger.info("Setting " + flag + "flag in QC_EGMS_TRANSACTIONTYPE_PRIV table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getCustomerXactionDetails(String transactionTypeID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from  QC_egms_Customer_xaction_Log with (nolock) where XACTIONTYPEID='" + transactionTypeID + "'" + "ORDER BY XACTIONID Desc;";
        logger.info("Fetching card - POSXACTIONID details from  QC_egms_Customer_xaction_Log, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Customer xaction log table values: " + retMap);
        return retMap;
    }

    public static String getCardNumber(String cardStatus, String cpg) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cpgDetails.get("CARDPROGRAMGROUPID");
        String query = "SELECT TOP 1 * FROM QC_EGMS_CARDS WITH (NOLOCK) WHERE CARDSTATUSID=" + cardStatus + " AND CARDPROGRAMGROUPID='" + cpgID + "'";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String cardNumber = retMap.get("CARDNUMBER");
        logger.info("Fetching CardNumber from QC_EGMS_CARDS, using Key: " + query);
        return cardNumber;
    }

    public static void setCardIssuerAcceptingCurrency(String flag, String value) throws SQLException, FrameworkException, ConfigPropertyException {
        String merchantName = getAPITestSetData("acceptingMerchant");
        String cpgName = getAPITestSetData("cpg19");
        String merchantId = getMerchantIdFromDB(merchantName);
        String issuerId = getIssuerIdFromDB(cpgName);
        String query = "";
        switch ("value") {
            case "₹":
                query =
                        "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = "
                                + "nchar(0x20B9)"
                                + " WHERE "
                                + "ISSUERID = '"
                                + issuerId
                                + "' and MERCHANTID='"
                                + merchantId
                                + "';";
                break;
            case "null":
                query =
                        "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = "
                                + value
                                + " WHERE "
                                + "ISSUERID = '"
                                + issuerId
                                + "' and MERCHANTID='"
                                + merchantId
                                + "';";
                break;
            case "NOTNULL":
                if (flag.equalsIgnoreCase("CURRENCYSYMBOL")) {
                    query =
                            "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = N'"
                                    + value
                                    + "' WHERE "
                                    + "ISSUERID = '"
                                    + issuerId
                                    + "' and MERCHANTID='"
                                    + merchantId
                                    + "';";
                }
                break;
            default:
                query =
                        "UPDATE QC_EGMS_CARD_ISSUER SET " + flag + " = '"
                                + value
                                + "' WHERE "
                                + "ISSUERID = '"
                                + issuerId
                                + "' and MERCHANTID='"
                                + merchantId
                                + "';";
        }
        logger.info("Setting currency conversion flag in card issuer in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setAcceptingSystemParameterCurrency(String flag, String value)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "";
        switch ("value") {
            case "₹":
                query =
                        "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                                + "nchar(0x20B9)"
                                + " WHERE "
                                + "MERCHANTID='"
                                + merchantID
                                + "';";
                break;
            case "null":
                query =
                        "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                                + value
                                + " WHERE "
                                + "MERCHANTID='"
                                + merchantID
                                + "';";
            case "NOTNULL":
                if (flag.equalsIgnoreCase("CURRENCYSYMBOL")) {
                    query =
                            "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = N'"
                                    + value
                                    + "' WHERE "
                                    + "MERCHANTID='"
                                    + merchantID
                                    + "';";
                }
                break;
            default:
                query =
                        "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = '"
                                + value
                                + "' WHERE "
                                + "MERCHANTID='"
                                + merchantID
                                + "';";
        }
        logger.info("Setting flag in system parameters " + query);
    }

    //Retrieve card customer history details using CardCustomerID
    public static Map<String, String> getCardCustomerHistoryDetailsFromDB(String cardCustomerID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select * from [QC_EGMS_CARD_CUSTOMER_History] with (nolock) where CARDCUSTOMERID = '" + cardCustomerID + "';";
        logger.info("Fetching customer details from  QC_EGMS_CARD_CUSTOMER_History, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    //Retrieve Extended card customer details using CardCustomerID
    public static Map<String, String> getExtendedCardCustomerDetailsFromDB(String cardCustomerID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select * from [QC_EGMS_EXTENDED_CUSTOMER] with (nolock) where CUSTOMERID = '" + cardCustomerID + "';";
        logger.info("Fetching customer details from  QC_EGMS_EXTENDED_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    //Retrieve countrycodeid by passing countryName
    public static String getCountryIdDetailsFromDB(String countryName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select COUNTRYID from [QC_EGMS_COUNTRY_LK] with (nolock) where COUNTRY = N'" + countryName + "';";
        logger.info("Fetching COUNTRYID from  QC_EGMS_COUNTRY_LK, using Query: " + query);
        String retMap = DBConnectionManager.getQueryResultAsStringMap(query).get("COUNTRYID");
        return retMap;
    }

    //Retrieve Statecodeid by passing State
    public static String getStateIdDetailsFromDB(String stateName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select STATEID from [QC_EGMS_STATE_LK] with (nolock) where STATE = N'" + stateName + "';";
        logger.info("Fetching SATATEID from  [QC_EGMS_STATE_LK], using Query: " + query);
        String retMap = DBConnectionManager.getQueryResultAsStringMap(query).get("STATEID");
        ;
        return retMap;
    }

    //Retrieve Citycodeid by passing city
    public static String getCityIdDetailsFromDB(String cityName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select CITYID from [QC_EGMS_CITY_LK] with (nolock) where CITY = N'" + cityName + "';";
        logger.info("Fetching CITYID from  [QC_EGMS_CITY_LK], using Query: " + query);
        String retMap = DBConnectionManager.getQueryResultAsStringMap(query).get("CITYID");
        return retMap;
    }

    //Retriving batch summary information
    public static Map<String, String> getBatchSummaryDetails(String batchId)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from qc_egms_batch_summary with (nolock) where BATCHID= '" + batchId + "';";
        logger.info("Fetching gift card details from qc_egms_batch_summary, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Batch summary value details: " + retMap);
        return retMap;
    }

    public static void setEXTActionMapStatusIdFlag(String value, String actionMap) throws SQLException, FrameworkException, ConfigPropertyException {

        logger.info("Setting EXT Action Map " + actionMap + " status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_EXT_ACTION_MAP SET STATUS = "
                        + value
                        + " WHERE "
                        + "EXTACTIONMAPNAME='"
                        + actionMap
                        + "';";

        logger.info("Setting EXTSETSTATUS flag in QC_EGMS_EXT_SET table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getxactiondetailsForEmd(String txnID, String batchID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "";

        query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where POSXACTIONID = '" + txnID + "' and BATCHID = '" + batchID + "' order by XACTIONID desc;";

        logger.info("Fetching card transaction details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card Level xaction log table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getValidationDetailsForAllCards(String txnID, String batchID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_VALIDATION_LOG with (nolock) where POSXACTIONID = '" + txnID + "' and BATCHID = '" + batchID + "' order by VALIDATIONLOGID desc; ";

        logger.info("Fetching card details from QC_EGMS_VALIDATION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Validation log table values: " + retMap);
        return retMap;
    }

    public static void setMaxCardBalanceInDB(String cpg, String amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        String query = null;
        logger.info("Setting Max Card Balance value in CARD_PROGRAM_GROUPS Table");

        if (amount.equalsIgnoreCase("null")) {
            query = "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET MAXCARDBALANCE = "
                    + null
                    + " WHERE "
                    + "CARDPROGRAMDESC = '"
                    + cpgDesc
                    + "';";
        } else {
            float maxCardBalance = Float.parseFloat(amount);
            query =
                    "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET MAXCARDBALANCE = "
                            + maxCardBalance
                            + " WHERE "
                            + "CARDPROGRAMDESC = '"
                            + cpgDesc
                            + "';";
        }
        logger.info("Setting Max Card Balance value in CARD_PROGRAM_GROUPS Table, using query: " + query);
        DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setActivationDateInDB(String flag, String cpg, String date)
            throws SQLException, FrameworkException, ConfigPropertyException {

        logger.info("Setting activation Begin date value in DB");
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String merchnatName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "";

        if (date != null) {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET " + flag + " = '"
                            + date
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        } else {
            query =
                    "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET " + flag + " = "
                            + date
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = "
                            + cpgID
                            + " and MERCHANTID="
                            + merchantID
                            + ";";
        }
        logger.info("Setting the " + flag + " from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static LinkedHashMap<Integer, LinkedHashMap<String, String>> getValidationLogDetails(String txnID, String batchID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select * from QC_EGMS_VALIDATION_LOG with (nolock) where POSXACTIONID = '" + txnID + "' and BATCHID = '" + batchID + "';";
        logger.info("Fetching card details from QC_EGMS_VALIDATION_LOG, using Query: " + query);
        ResultSet rset = getQueryResults(query);
        ResultSetMetaData resultSetMetaData = rset.getMetaData();
        int countCol = resultSetMetaData.getColumnCount();
        LinkedHashMap<Integer, LinkedHashMap<String, String>> dbData = new LinkedHashMap<>();

        while (rset.next()) {
            LinkedHashMap<String, String> rowData = new LinkedHashMap<>();
            for (int col = 1; col < countCol + 1; col++) {
                String colname = rset.getMetaData().getColumnName(col);
                rowData.put(colname, rset.getString(col));
            }
            int rowV = rset.getRow();
            dbData.put(rowV, rowData);
        }
        logger.info("Validation log table values: " + dbData);
        return dbData;
    }

    public static void setSystemParameterFlagForIssuingMerchant(String flag, String value)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData("acceptingMerchant");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "";
        if (value.equalsIgnoreCase("null")) {
            query = "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                    + value
                    + " WHERE "
                    + "MERCHANTID='"
                    + merchantID
                    + "';";
        } else {
            query = "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = '"
                    + value
                    + "' WHERE "
                    + "MERCHANTID='"
                    + merchantID
                    + "';";
        }
        logger.info("Setting Value In System Param  in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setDefaultValueInGlobalSetting(String settingValue, String settingId) throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "" ;
        if(settingValue.equalsIgnoreCase("null") ){
            query =
                    "UPDATE QC_EGMS_GLOBAL_SETTING_VALUE  SET SETTINGVALUE  = null"
                            + " WHERE "
                            + "SETTINGID='"
                            + settingId
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_GLOBAL_SETTING_VALUE  SET SETTINGVALUE  = '"
                            + settingValue
                            + "' WHERE "
                            + "SETTINGID='"
                            + settingId
                            + "';";
        }
        logger.info("Setting Default Value In Global Setting  in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void mapUserToOutlet(String outlet, String orgID, String userID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "";
        if (outlet.equalsIgnoreCase("null")) {
            query =
                    "UPDATE QC_EGMS_USERS SET MERCHANTOUTLETID = "
                            + outlet
                            + " WHERE "
                            + "ORGID='"
                            + orgID
                            + "' and USERID='"
                            + userID
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_USERS SET MERCHANTOUTLETID = '"
                            + outlet
                            + "' WHERE "
                            + "ORGID='"
                            + orgID
                            + "' and USERID='"
                            + userID
                            + "';";
        }
        logger.info("Maping user to the outlet in user table " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String readAPITestDataPropertyForI18N(String Key) throws ConfigPropertyException, FrameworkException {

        String filePropertyValue = LoadProperties.getPropertyValue("TestEnv");
        String fileName = "testData/api/" + filePropertyValue + "APITestData.properties";
        File file = new File(fileName);
        Properties prop = new Properties();
        FileInputStream fileInput = null;
        try {
            fileInput = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try {
            // This change made to Retrive the Non English Data from the config file
            prop.load(new InputStreamReader(fileInput, Charset.forName("UTF-8")));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(Key);
    }

    public static String generateRandomMutliByte(int length, String lang) {
        StringBuffer randStr = new StringBuffer();
        for (int i = 0; i <= length; i++) {
            int number = getRandomNumber(lang);
            char ch = CHAR_LIST.charAt(number);
            randStr.append(ch);
        }
        logger.info("Generated MultiByte Value : " + randStr.toString() + "for the given Language Input" + lang);
        return randStr.toString();
    }

    public static int getRandomNumber(String lang) {
        int randomInt = 0;
        Random randomGenerator = new Random();
        if (lang.contains("CHINESE")) CHAR_LIST = CHINESE_LIST;
        if (lang.contains("GERMAN")) CHAR_LIST = GERMAN_LIST;
        if (lang.contains("ARABIC")) CHAR_LIST = ARABIC_LIST;
        if (lang.contains("HINDI")) CHAR_LIST = HINDI_LIST;
        randomInt = randomGenerator.nextInt(CHAR_LIST.length());
        logger.info("Random Number Generated  : " + randomInt + "for the given Language Input" + lang);

        if (randomInt - 1 == -1) {
            return randomInt;
        } else {
            return randomInt - 1;
        }
    }

    public static String generatei18NRandomString() {
        StringBuffer randStr = new StringBuffer();
        String lang[] = {"CHINESE", "GERMAN", "ARABIC", "HINDI"};
        for (int i = 0; i < lang.length; i++) {
            int number = getRandomNumber(lang[i]);
            char ch = CHAR_LIST.charAt(number);
            randStr.append(ch);
        }
        logger.info("Generated MultiByte Value : " + randStr.toString() + "for the i18N Language Input");
        return randStr.toString();
    }

    public static String generatei18NRandomStringFNAndLNMaxLength() {
        StringBuffer randStr = new StringBuffer();
        String lang[] = {"CHINESE", "GERMAN", "ARABIC", "HINDI"};
        for (int i = 0; i < 51; i++) {
            int number = getRandomNumber(lang[i % 4]);
            char ch = CHAR_LIST.charAt(number);
            randStr.append(ch);
        }
        logger.info("Generated MultiByte Value : " + randStr.toString() + "for the i18N Language Input");
        return randStr.toString();
    }

    public static void setSystemParameterFlag(String flag, String value, String merchant)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String merchnatName = getAPITestSetData(merchant);
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchnatName);
        String merchantID = merchantDetails.get("MERCHANTID");
        String query = "";
        if (value.equalsIgnoreCase("null")) {
            query = "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = "
                    + value
                    + " WHERE "
                    + "MERCHANTID='"
                    + merchantID
                    + "';";
        } else {
            query = "UPDATE QC_EGMS_SYSTEM_PARAMETERS SET " + flag + " = '"
                    + value
                    + "' WHERE "
                    + "MERCHANTID='"
                    + merchantID
                    + "';";
        }
        logger.info("Setting Value In System Param  in DB " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getTopSecondXactionDetails(String cardNumber, String transactionID, String xactionTypeId) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_XACTION_LOG with (nolock) where CARDNUMBER= '" + cardNumber + "' and POSXACTIONID = '" + transactionID + "' and XACTIONTYPEID= '"
                + xactionTypeId +
                "' order by XACTIONID;";
        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static void setMaxReloadLimitInDB(String cpgID, String merchantID, String amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Maximum Reload value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MAXLIMITFORRELOAD = '"
                        + amount
                        + "' WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID="
                        + merchantID
                        + ";";

        logger.info("Setting the MAXLIMITFORRELOAD from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMaxReloadLimitInDBForDefault(String cpg, String amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String merchantName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchantName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setMaxReloadLimitInDB(cpgID, merchantID, amount);
    }

    public static void setMinReloadLimitInDB(String cpgID, String merchantID, String amount)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Card Minimum Reload value in DB");
        String query =
                "UPDATE QC_EGMS_GIFTCARD_PARAMETERS SET MINLIMITFORRELOAD = '"
                        + amount
                        + "' WHERE "
                        + "CARDPROGRAMGROUPID = "
                        + cpgID
                        + " and MERCHANTID="
                        + merchantID
                        + ";";

        logger.info("Setting the MINLIMITFORRELOAD from QC_EGMS_GIFTCARD_PARAMETERS, using Query: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setMinReloadLimitInDBForDefault(String cpg, String amount)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String merchantName = getAPITestSetData("merchantName");
        Map<String, String> merchantDetails = getMerchantDetailsFromDB(merchantName);
        String merchantID = merchantDetails.get("MERCHANTID");
        setMinReloadLimitInDB(cpgID, merchantID, amount);
    }

    public static String getCountryCurrentDateAndTime(String timeZoneCode) throws ConfigPropertyException, FrameworkException {
        String countryCurrentDateAndTime = "";
        String timeZoneOffSet = "";
        String time = "";
        try {
            String query =
                    "select Top 1 TIMEZONEOFFSET from QC_EGMS_TIME_ZONES_LK with (nolock) where TIMEZONECODE like '%"
                            + timeZoneCode
                            + "%';";
            logger.info(
                    "Fetching TimeZoneOffset from QC_EGMS_TIME_ZONES_LK, using Query: "
                            + query);

            Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
            timeZoneOffSet = retMap.get("TIMEZONEOFFSET");
            time = timeZoneOffSet.replace("UTC", "GMT");
            final SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
            f.setTimeZone(TimeZone.getTimeZone(time));
            System.out.println(f.format(new Date()));
            countryCurrentDateAndTime = f.format(new Date());
        } catch (SQLException e) {
            logger.info(e.getMessage());
        }
        return countryCurrentDateAndTime;
    }

    public static String getExtAttributeValueId(String parameter) throws SQLException, FrameworkException, ConfigPropertyException {

        logger.info("Getting EXT Attribute Values in DB to " + "" + parameter);
        String query = "SELECT TOP 1 * FROM QC_EGMS_EXT_ATTRIBUTE_VALUE with (NOLOCK) WHERE ENTITYID='" + parameter + "';";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String extattributevalueidId = retMap.get("EXTATTRIBUTEVALUEID");
        return extattributevalueidId;
    }

    public static void updateEntityIdValueToNullInExtAttributeValueTableAtCPGLevel(String cpg) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgName = getAPITestSetData(cpg);
        String query = "update QC_EGMS_EXT_ATTRIBUTE_VALUE SET ENTITYID = " + null + " where ENTITYID = (\n" +
                "select CARDPROGRAMGROUPID\n" +
                "from QC_EGMS_CARD_PROGRAM_GROUPS\n" +
                "where CARDPROGRAMDESC='" + cpgName + "')";
        logger.info("Updating entity id to null in Ext Attribute Value Table at CPG Level: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void updateEntityIdValueWithCpgIdInExtAttributeValueTable(String cpg,String extAttributeValueid) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgName = getAPITestSetData(cpg);
        String cpgId =getCpgIdFromDB(cpgName);
        String query = "update QC_EGMS_EXT_ATTRIBUTE_VALUE SET ENTITYID = '" + cpgId + "' where  EXTATTRIBUTEVALUEID = '"+extAttributeValueid+"'";
        logger.info("Updating Ext Attribute Value Table at CPG Level: " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static String getBookletCards(String bookletStatus, String cpg) throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cpgDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cpgDetails.get("CARDPROGRAMGROUPID");
        String query = "SELECT TOP 1 * FROM QC_EGMS_CARDS WITH (NOLOCK) WHERE BOOKLETNUMBER IN(SELECT BOOKLETNUMBER FROM QC_EGMS_BOOKLET WHERE CARDPROGRAMGROUPID = '" + cpgID + "' AND BOOKLETSTATUS= " + bookletStatus + ")";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String cardNumber = retMap.get("CARDNUMBER");
        logger.info("Fetching CardNumber from QC_EGMS_CARDS, using Key: " + query);
        return cardNumber;
    }

    public static Map<String, String> getBookletDetailsFromDB(String bookletNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from qc_egms_booklet with (nolock) where BOOKLETNUMBER= '" + bookletNumber + "';";
        logger.info("Fetching booklet details from qc_egms_booklet, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Booklet database values: " + retMap);
        return retMap;
    }

    public static void setBookletStatusInDB(String bookletStatusId, String bookletNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting Booklet status in DB");
        String query =
                "UPDATE QC_EGMS_BOOKLET SET BOOKLETSTATUS = "
                        + bookletStatusId
                        + " WHERE "
                        + "BOOKLETNUMBER = '"
                        + bookletNumber +
                        "';";

        logger.info("Executing the query " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setCardProductvalue(String flag, String value, String cpg) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgID = "";
        switch (cpg) {
            case "cpg1":
                cpg = getAPITestSetData("cpg1");
                break;
            case "cpg2":
                cpg = getAPITestSetData("cpg2");
                break;
            case "cpg38":
                cpg = getAPITestSetData("cpg38");
                break;
            case "cpg39":
                cpg = getAPITestSetData("cpg39");
                break;
            case "cpg52":
                cpg = getAPITestSetData("cpg52");
                break;
            case "cpg53":
                cpg = getAPITestSetData("cpg53");
                break;
            default:
                logger.info("Proper cpg name not provoided ");
        }
        cpgID = getCpgIdFromDB(cpg);
        String query = null;
        if (value.equalsIgnoreCase("null")) {
            value = null;
            query =
                    "UPDATE QC_EGMS_PRODUCT SET " + flag + " = "
                            + value
                            + " WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "';";
        } else {
            query =
                    "UPDATE QC_EGMS_PRODUCT SET " + flag + " = '"
                            + value
                            + "' WHERE "
                            + "CARDPROGRAMGROUPID = '"
                            + cpgID
                            + "';";
        }
        logger.info("Setting value in QC_EGMS_PRODUCT table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getCustomerXactiondetails(String TransactionId, String BatchNo) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_egms_Customer_xaction_Log with (nolock) where POSXACTIONID= '" + TransactionId + "' and BATCHID= '" + BatchNo + "' order by XACTIONID desc; ";

        logger.info("Fetching card details from QC_EGMS_CUSTOMER_XACTION_LOG using transaction id and batch number, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("xaction log table values: " + retMap);
        return retMap;
    }

    public static String getDateAndTimeWithThreshold(String date, String timeStamp, int value, String dateFormat) {
        String result = "";
        try {
            SimpleDateFormat f = new SimpleDateFormat(dateFormat);
            Date d = f.parse(date);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(d);
            switch (timeStamp.toUpperCase()) {
                case "DAY":
                    calendar.add(Calendar.DATE, value);
                    break;
                case "MONTH":
                    calendar.add(Calendar.MONTH,value);
                    break;
                case "YEAR":
                    calendar.add(Calendar.YEAR,value);
                    break;
                case "HOUR":
                    calendar.add(Calendar.HOUR,value);
                    break;
                case "MINUTE":
                    calendar.add(Calendar.MINUTE,value);
                    break;
                case "SECOND":
                    calendar.add(Calendar.SECOND,value);
                    break;
                default:
                logger.info("Invalid TimeStamp");
                break;
            }
            result = f.format(calendar.getTime());

        } catch (ParseException e) {
            logger.info(e.getMessage());
        }
        return result;
    }
    public static void setAllowRedeemIfCardholderInInvoice(String cpg, String value)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET ALLOWREDEEMIFCARDHOLDERININVOICE = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting ALLOWREDEEMIFCARDHOLDERININVOICE flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setValuesInPasswordManager(String flag, String value, String orgID)
            throws ConfigPropertyException, FrameworkException, SQLException {

        String query =
                "UPDATE QC_EGMS_PASSWORDMANAGER SET " + flag + " = '"
                        + value
                        + "' WHERE "
                        + "ORGID = '"
                        + orgID
                        + "';";
        logger.info("Setting QC_EGMS_PASSWORDMANAGER" + flag + "to" + value + " in QC_EGMS_PASSWORDMANAGER table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void setValuesInUsers(String flag, String value, String UserId)
            throws ConfigPropertyException, FrameworkException, SQLException {

        String query =
                "UPDATE QC_EGMS_USERS SET " + flag + " = '"
                        + value
                        + "' WHERE "
                        + "USERID = '"
                        + UserId
                        + "';";
        logger.info("Setting QC_EGMS_PASSWORDMANAGER" + flag + "to" + value + " in QC_EGMS_USERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getQcOrgDetailsFromDB(String orgName) throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select * from QC_EGMS_ORGS with (nolock) where ORGNAME= '" + orgName +
               "';";
        logger.info("Fetching org details from QC_EGMS_ORGS, using Query: " + query);
        logger.info("Orgname is " + orgName);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static String getQCUserIdFromDB(String userName) throws SQLException, ConfigPropertyException, FrameworkException {
        Map<String, String> userDetails = getUserDetailsForQcFromDB(userName);
        String userId = userDetails.get("USERID");
        return userId;
    }

    public static Map<String, String> getUserDetailsForQcFromDB(String userName)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String orgName = getAPITestSetData("QcOrgName");
        String orgId = getOrgIdFromDB(orgName);
        userName = userName.toUpperCase();
        Connection conn = DBPoolProvider.getConnection();
        String query = "select * from QC_EGMS_USERS with (nolock) where USERLOGIN=? and ORGID='" + orgId + "';";
        PreparedStatement ps = conn.prepareStatement(query);
        ps.setNString(1, userName);
        ResultSet result = ps.executeQuery();
        Map<String, String> retMap = DBConnectionManager.resultSetToStringMap(result);
        logger.info(String.valueOf(retMap));
        if (ps != null) {
            ps.close();
        }

        if (conn != null) {
            conn.close();
        }
        return retMap;
    }

    public static String getDynamicTime(String dateValue) {
        String time = "";
        String mins = "minutes";
        String hrs = "hours";
        String Sec="Seconds";

        if (StringUtils.containsIgnoreCase(dateValue, "MINUTES+")) {
            dateValue = dateValue.toUpperCase().replace("MINUTES+", "");
            time = getCurrentOrPastOrFutureTime(Integer.valueOf(dateValue), "yyyy-MM-dd-HH-mm",mins);
        } else if (StringUtils.containsIgnoreCase(dateValue, "MINUTES-")) {
            dateValue = dateValue.toUpperCase().replace("MINUTES-", "");
            time = getCurrentOrPastOrFutureTime((-1) * Integer.valueOf(dateValue), "yyyy-MM-dd-HH-mm",mins);
        }
        return time;
    }

    public static String getCurrentOrPastOrFutureTime(int unit, String format,String timeUnit) {
        String result = "";
        Date date = new Date();
        Calendar calender = Calendar.getInstance();
        calender.setTime(date);
        if(timeUnit.equalsIgnoreCase("minutes"))
        {
            calender.add(Calendar.MINUTE, unit);
        }
        else if(timeUnit.equalsIgnoreCase("seconds"))
        {
            calender.add(Calendar.SECOND, unit);
        }
        else  if(timeUnit.equalsIgnoreCase("hours"))
        {
            calender.add(Calendar.HOUR, unit);
        }
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        result = sdf.format(calender.getTime()).toString();
        return result;
    }
    public static void setValuesInUsersForOrg(String flag, String value, String OrgName)
            throws ConfigPropertyException, FrameworkException, SQLException {

        String OrgId = getOrgIdFromDB(OrgName);
        String query =
                "UPDATE QC_EGMS_USERS SET " + flag + " = '"
                        + value
                        + "' WHERE "
                        + "ORGID = '"
                        + OrgId
                        + "';";
        logger.info("Setting QC_EGMS_PASSWORDMANAGER" + flag + "to" + value + " in QC_EGMS_USERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String>  getExtCards(String key, String value) throws SQLException, ConfigPropertyException, FrameworkException {
        String cpgDesc = getAPITestSetData(value);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");
        String query= "";
        if(key.equalsIgnoreCase("CARDPROGRAMGROUPID")) {
             query = "SELECT * FROM QC_EGMS_EXT_CARDS WHERE CARDPROGRAMGROUPID = '" + cpgID + "'";
        }
        else if(key.equalsIgnoreCase("CARDNUMBER")){
            query = "SELECT * FROM QC_EGMS_EXT_CARDS WHERE CARDNUMBER = '"+value+"'";
        }
        logger.info("Fetching CARDNUMBER by using QC_EGMS_EXT_CARDS table " + "" + query);
        Map<String, String> retMap =  DBConnectionManager.getQueryResultAsStringMap(query);
        return retMap;
    }

    public static Map<String, String> getExternalXactionLogdetails(String transactionID, String transactionTypeID) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select top 1 * from QC_EGMS_EXTERNAL_XACTION_LOG with (nolock) where POSXACTIONID= '" + transactionID + "' AND XACTIONTYPEID='" + transactionTypeID + "'" + "ORDER BY EXTERNALXACTIONID Desc;";
        logger.info("Fetching card details from QC_EGMS_EXTERNAL_XACTION_LOG, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("External Xaction log table values: " + retMap);
        return retMap;
    }

    //Retrieve card customer details using CancelXactionId
    public static Map<String, String> getCardCustomerArchiveDetailsFromDB(String transactionID)
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query =
                "select * from QC_EGMS_CARD_CUSTOMER_ARCHIVE with (nolock) where CANCELXACTIONID = '" + transactionID + "';";
        logger.info("Fetching customer details from  QC_EGMS_CARD_CUSTOMER_ARCHIVE, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card Customer Archive table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getCustomerDetailsFromDBUsingCustomerId(String cardCustomerID) throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("cardCustomerID to be passed is : " + "" + cardCustomerID);
        String query =
                "select TOP 1 * from QC_EGMS_CARD_CUSTOMER with (nolock) where CARDCUSTOMERID = '" + cardCustomerID + "';";
        logger.info("Fetching customer details from  QC_EGMS_CARD_CUSTOMER, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card Customer table values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getExtendedCardsDetails(String cardId) throws SQLException, ConfigPropertyException, FrameworkException {
        logger.info("CardId to be passed is : " + "" + cardId);
        String query = "SELECT TOP 1 * FROM QC_EGMS_EXTENDED_CARDS WHERE CARDID = " + cardId + " ORDER BY 1 DESC;";
        logger.info("Fetching Extended Card details from  QC_EGMS_EXTENDED_CARDS, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Extended Card table values: " + retMap);
        return retMap;
    }

    public static void updateCostCentre(String flag, String value, String value1,String merchantId)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String query ="UPDATE QC_EGMS_COST_CENTRES SET ISACTIVE= "+flag+" WHERE COSTCENTRE IN ('" + value + "','" + value1 + "') AND \n" +
                "MERCHANTID='" + merchantId + "'";
        logger.info("update cost centre in QC_EGMS_COST_CENTRES table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static void updateGeneralLedger(String flag, String value, String value1,String merchantId)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String query = "UPDATE QC_EGMS_GENERAL_LEDGERS SET ISACTIVE=" + flag + " WHERE GENERALLEDGER IN ('" + value + "','" + value1 + "') AND \n" +
                "MERCHANTID='" + merchantId + "'";
        logger.info("update general ledger in QC_EGMS_GENERAL_LEDGERS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String, String> getSequenceMapDetailsFromDB()
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "select TOP 1 * from QC_EGMS_REQUEST_SEQUENCE_MAP order by requestsequencemapid DESC;";
        logger.info("Fetching sequence map details from QC_EGMS_REQUEST_SEQUENCE_MAP, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("database values: " + retMap);
        return retMap;
    }

    public static Map<String, String> getSequenceRangeDetailsFromDB()
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = "SELECT TOP 1 * from QC_EGMS_SLAB_SEQUENCE_RANGE order by SLABSEQUENCERANGEID DESC;";
        logger.info("Fetching sequence map details from QC_EGMS_REQUEST_SEQUENCE_MAP, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("database values: " + retMap);
        return retMap;
    }

    public static  String getCurrentValueOfSequenceNumber()
            throws SQLException, FrameworkException, ConfigPropertyException {
        String query = " SELECT\n" +
                "Cast(ISNULL(seq.current_value,N'''') as INT) AS [CurrentValue]\n" +
                "FROM\n" +
                "sys.sequences AS seq where seq.name = 'QC_EGMS_SEQ_CARDSEQUENCENUMBER'";
        logger.info("Fetching sequence Number  , using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String sequenceNumber = retMap.get("CurrentValue");
        logger.info("database values: " + retMap);
        return sequenceNumber;
    }
    public static void setCanEnterCardNumberFlag(String flag, String orgName, String userRoleName) throws SQLException, ConfigPropertyException, FrameworkException {
        userRoleName = getAPITestSetData(userRoleName);
        String query = "SELECT ORGID FROM QC_EGMS_ORGS with (NOLOCK) WHERE ORGNAME = '" + orgName + "'";
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String query2 = "SELECT USERROLEID FROM QC_EGMS_USER_ROLES with (NOLOCK) WHERE USERROLEDESC = '" + userRoleName + "'";
        Map<String, String> retMap1 = DBConnectionManager.getQueryResultAsStringMap(query2);
        String query3 = "UPDATE QC_EGMS_USER_ROLES SET CANENTERCARDNUMBER = '" + flag + "' WHERE ORGID = '" + retMap.get("ORGID") + "' AND USERROLEID = '" + retMap1.get("USERROLEID") + "'";
        int result = DBConnectionManager.executeUpdateQuery(query3);
        logger.info("Updating the QC_EGMS_USER_ROLES using Query: " + query3);
    }
    public static void setOriginalActivationDateInDB(String originalactivationDate, String cardNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Setting originalactivationDate in DB");
        if (StringUtils.containsIgnoreCase(originalactivationDate, "DATE")) {
            originalactivationDate = getDynamicDate(originalactivationDate);
        }
        String query =
                "UPDATE QC_EGMS_CARDS SET ORIGINALACTIVATIONDATE = '"
                        + originalactivationDate
                        + "' WHERE "
                        + "CARDNUMBER = '"
                        + cardNumber +
                        "';";

        logger.info("Executing the query " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }


    public static void setAllowCardpinInputDuringCreateAndIssueFlag(String value, String cpg) throws SQLException, FrameworkException, ConfigPropertyException {
        String cpgName = getAPITestSetData(cpg);
        String issuerId = getIssuerIdFromDB(cpgName);

        logger.info("Setting AllowCardpinInputDuringCreateAndIssue status in DB to " + "" + value);
        String query =
                "UPDATE QC_EGMS_CARD_ISSUER_MIGRATION_CONFIG SET ALLOWCARDPININPUTDURINGCREATEANDISSUE = "
                        + value
                        + " WHERE "
                        + "ISSUERID='"
                        + issuerId
                        + "';";

        logger.info("Setting ALLOWCARDPININPUTDURINGCREATEANDISSUE flag in QC_EGMS_CARD_ISSUER_MIGRATION_CONFIG table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static LinkedHashMap<Integer, LinkedHashMap<String, String>> getAllTransactionsXactionLogDetailsWithCardNumber(String cardNumber) throws SQLException, ConfigPropertyException, FrameworkException {
        String query = "select  * from QC_EGMS_XACTION_LOG with (nolock) where\n" +
                "CARDNUMBER= '" + cardNumber + "' ORDER BY XACTIONID DESC";
        logger.info("Fetching card details from QC_EGMS_XACTION_LOG, using Query: " + query);
        ResultSet rset = getQueryResults(query);
        ResultSetMetaData resultSetMetaData = rset.getMetaData();
        int countCol = resultSetMetaData.getColumnCount();
        LinkedHashMap<Integer, LinkedHashMap<String, String>> dbData = new LinkedHashMap<>();

        while (rset.next()) {
            LinkedHashMap<String, String> rowData = new LinkedHashMap<>();
            for (int col = 1; col < countCol + 1; col++) {
                String colname = rset.getMetaData().getColumnName(col);
                rowData.put(colname, rset.getString(col));
            }
            int rowV = rset.getRow();
            dbData.put(rowV, rowData);
        }
        logger.info("Xaction Log table values: " + dbData);
        return dbData;
    }

    public static String getsequencenumber(String cardnumber) throws ConfigPropertyException, FrameworkException, SQLException {
        String query = "SELECT * FROM QC_EGMS_CARDS WITH (NOLOCK) WHERE CARDNUMBER='" + cardnumber + "'";
        logger.info("Fetching SEQUENCENUMBER from QC_EGMS_CARDS, using Key: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        String sequenceNumber = retMap.get("SEQUENCENUMBER");
        return sequenceNumber;
    }

    public static void setDoNotValidateCardFormatInDBForDefault(String cpg, String value)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String cpgDesc = getAPITestSetData(cpg);
        Map<String, String> cardDetails = getCardProgramGroupsDetailsFromDB(cpgDesc);
        String cpgID = cardDetails.get("CARDPROGRAMGROUPID");

        String query =
                "UPDATE QC_EGMS_CARD_PROGRAM_GROUPS SET DONOTVALIDATECARDFORMAT = "
                        + value
                        + " WHERE "
                        + "CARDPROGRAMGROUPID = '"
                        + cpgID
                        + "';";

        logger.info("Setting DONOTVALIDATECARDFORMAT flag in QC_EGMS_CARD_PROGRAM_GROUPS table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
}

    public static void updateMerchantGroupMerchantMap(String flag, String value,String merchantId)
            throws ConfigPropertyException, FrameworkException, SQLException {
        String query = "UPDATE QC_EGMS_MERCHANT_GROUPS_MERCHANT_MAP SET "+flag+"=" + value + " WHERE MERCHANTID='" + merchantId + "'";
        logger.info("update "+flag+" in QC_EGMS_MERCHANT_GROUPS_MERCHANT_MAP table " + "" + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
    }

    public static Map<String,String> getCardDetails(String referenceNumber) throws FrameworkException, ConfigPropertyException, SQLException {
       // String query = "Select CorporateId,CardSchemeId from card AS bigint where cardid='59393';";
        String query = " Select CorporateId,CardSchemeId,ActivationEmail,ActivationEmail,ActivationMobileNumber " +
                "from card AS bigint where ReferenceNumber=convert(bigint, " +
                "1789154895" +
                ");";
        logger.info("Fetching card details from card table, using Query: " + query);
        Map<String, String> retMap = DBConnectionManager.getQueryResultAsStringMap(query);
        logger.info("Card database values: " + retMap);
        return retMap;
    }

    public static void DelinkMobileNumber(String MobileNumber)
            throws SQLException, FrameworkException, ConfigPropertyException {
        logger.info("Delinking mobile from Cards");
        String query =
                "update card set CardStatus=4"
                 +"where AccountType=18 " + "and ActivationMobileNumber in"
                 +"(" + MobileNumber + ") and CardType=2 and cardstatus in (1,2);";
        logger.info("Executing the query " + query);
        int result = DBConnectionManager.executeUpdateQuery(query);
        logger.info("No. of rows affected on delinking mobile" + result);
    }
}