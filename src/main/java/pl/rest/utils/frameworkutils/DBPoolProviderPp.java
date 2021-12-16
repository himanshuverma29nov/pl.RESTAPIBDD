package pl.rest.utils.frameworkutils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBPoolProviderPp {
    private static final Logger logger = LoggerFactory.getLogger(DBPoolProviderPp.class);

    public static Connection getConnection() throws SQLException {
        String connectionUrl = System.getProperty("devDBConnectionUrl");

        Connection connection = null;

        try {
            connection = DriverManager.getConnection(connectionUrl);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        logger.info("Retrieved connection");

        return connection;
    }
}
