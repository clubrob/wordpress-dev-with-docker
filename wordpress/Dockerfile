FROM wordpress:latest

COPY ./wordpress/wordpress.ini $PHP_INI_DIR/conf.d/

# Add sudo in order to run wp-cli as the www-data user
RUN apt-get update && apt-get install -y sudo less

# Add WP-CLI
RUN curl -o /bin/wp-cli.phar https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

COPY ./wordpress/wp-su.sh /bin/wp

RUN chmod +x /bin/wp-cli.phar /bin/wp