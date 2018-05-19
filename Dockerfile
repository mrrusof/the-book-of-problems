FROM httpd:2.4.25

LABEL maintainer ruslanledesmagarza@gmail.com

ADD apache2/conf /usr/local/apache2/conf/

ADD dist /usr/local/apache2/htdocs/

RUN chown --recursive www-data:www-data /usr/local/apache2/htdocs/