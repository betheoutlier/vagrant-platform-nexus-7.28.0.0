<?php 
/**
 * @file
 * Configuration file for Drupal's multi-site directory aliasing feature.
 *
 * Drupal searches for an appropriate configuration directory based on the
 * website's hostname and pathname. A detailed description of the rules for
 * discovering the configuration directory can be found in the comment
 * documentation in 'sites/default/default.settings.php'.
 *
 * This file allows you to define a set of aliases that map hostnames and
 * pathnames to configuration directories. These aliases are loaded prior to
 * scanning for directories, and they are exempt from the normal discovery
 * rules. The aliases are defined in an associative array named $sites, which
 * should look similar to the following:
 *
 * $sites = array(
 *   'devexample.com' => 'example.com',
 *   'localhost.example' => 'example.com',
 * );
 *
 * The above array will cause Drupal to look for a directory named
 * "example.com" in the sites directory whenever a request comes from
 * "example.com", "devexample.com", or "localhost/example". That is useful
 * on development servers, where the domain name may not be the same as the
 * domain of the live server. Since Drupal stores file paths into the database
 * (files, system table, etc.) this will ensure the paths are correct while
 * accessed on development servers.
 *
 * To use this file, copy and rename it such that its path plus filename is
 * 'sites/sites.php'. If you don't need to use multi-site directory aliasing,
 * then you can safely ignore this file, and Drupal will ignore it too.
 */

/**
 * Multi-site directory aliasing:
 *
 * Edit the lines below to define directory aliases. Remove the leading hash
 * signs to enable.
 */
$sites = array (

  'www.nwemc.com' => 'www.nwemc.com',
  'nwemc.com' => 'www.nwemc.com',
  'local.nwemc.com' => 'www.nwemc.com',
  'nwemc.dev.iamanoutlier.com' => 'www.nwemc.com',
  'nwemc.local.iamanoutlier.com' => 'www.nwemc.com',
  'www.nwemc.dev.iamanoutlier.com' => 'www.nwemc.com',
  'www.nwemc.local.iamanoutlier.com' => 'www.nwemc.com',
  
  'www.eventnetwork.com' => 'www.eventnetwork.com',
  'eventnetwork.com' => 'www.eventnetwork.com',
  'local.eventnetwork.com' => 'www.eventnetwork.com',
  'eventnetwork.dev.iamanoutlier.com' => 'www.eventnetwork.com',
  'eventnetwork.local.iamanoutlier.com' => 'www.eventnetwork.com',
  'www.eventnetwork.dev.iamanoutlier.com' => 'www.eventnetwork.com',
  'www.eventnetwork.local.iamanoutlier.com' => 'www.eventnetwork.com',
  
  'www.macadoosgrille.com' => 'www.macadoosgrille.com',
  'macadoosgrille.com' => 'www.macadoosgrille.com',
  'local.macadoosgrille.com' => 'www.macadoosgrille.com',
  'macadoosgrille.dev.iamanoutlier.com' => 'www.macadoosgrille.com',
  'macadoosgrille.local.iamanoutlier.com' => 'www.macadoosgrille.com',
  'www.macadoosgrille.dev.iamanoutlier.com' => 'www.macadoosgrille.com',
  'www.macadoosgrille.local.iamanoutlier.com' => 'www.macadoosgrille.com',
  'www.mac.test.iamanoutlier.com' => 'www.macadoosgrille.com',
  'www.mac.dev.iamanoutlier.com' => 'www.macadoosgrille.com',
  
  'www.gilson.com' => 'www.gilson.com',
  'gilson.com' => 'www.gilson.com',
  'local.gilson.com' => 'www.gilson.com',
  'gilson.dev.iamanoutlier.com' => 'www.gilson.com',
  'gilson.local.iamanoutlier.com' => 'www.gilson.com',
  'www.gilson.dev.iamanoutlier.com' => 'www.gilson.com',
  'www.gilson.local.iamanoutlier.com' => 'www.gilson.com',
  
);
