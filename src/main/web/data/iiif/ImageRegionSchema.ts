/**
 * ResearchSpace
 * Copyright (C) 2015-2020, © Trustees of the British Museum
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { vocabularies } from 'platform/api/rdf';
import { rso } from '../vocabularies';

import * as Forms from 'platform/components/forms';

export const SubjectTemplate = `${rso.ImageRegion.value}/{{UUID}}`;

export const ImageRegionType = Forms.normalizeFieldDefinition({
  id: 'type',
  xsdDatatype: vocabularies.xsd._string,
  insertPattern: `INSERT { $subject a $value } WHERE {}`,
  selectPattern: `SELECT ?value WHERE { $subject a ?value }`,
});

export const ImageRegionLabel = Forms.normalizeFieldDefinition({
  id: 'label',
  xsdDatatype: vocabularies.xsd._string,
  insertPattern: `INSERT {
    $subject <http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content> $value .
  } WHERE {}`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content> ?value .
  }`,
});

export const ImageRegionBoundingBox = Forms.normalizeFieldDefinition({
  id: 'boundingBox',
  xsdDatatype: vocabularies.xsd._string,
  insertPattern: `INSERT {
    $subject <http://www.researchspace.org/ontology/boundingBox> $value .
  } WHERE {}`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.researchspace.org/ontology/boundingBox> ?value .
  }`,
});

export const ImageRegionValue = Forms.normalizeFieldDefinition({
  id: 'value',
  xsdDatatype: vocabularies.xsd._string,
  insertPattern: `INSERT {
    $subject <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> $value .
  } WHERE {}`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.w3.org/1999/02/22-rdf-syntax-ns#value> ?value .
  }`,
});

export const ImageRegionViewport = Forms.normalizeFieldDefinition({
  id: 'viewport',
  xsdDatatype: vocabularies.xsd._string,
  insertPattern: `INSERT {
    $subject <http://www.researchspace.org/ontology/viewport> $value .
  } WHERE {}`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.researchspace.org/ontology/viewport> ?value.
  }`,
});

export const ImageRegionIsPrimaryAreaOf = Forms.normalizeFieldDefinition({
  id: 'isPrimaryAreaOf',
  xsdDatatype: vocabularies.xsd.anyURI,
  insertPattern: `INSERT {
    $subject <http://www.ics.forth.gr/isl/CRMdig/L49_is_primary_area_of> $value .
  } WHERE {}`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.ics.forth.gr/isl/CRMdig/L49_is_primary_area_of> ?value .
  }`,
});

export const ImageRegionIsRepresentationOfFrame = Forms.normalizeFieldDefinition({
  id: 'isRepresentationOfFrame',
  xsdDatatype: vocabularies.xsd.anyURI,
  insertPattern: `INSERT {
      #creation of framing activity
      ?framing crm:P140_assigned_attribute_to $value.
      ?framing crm:P141_assigned ?frame.
      ?framing crm:P177_assigned_property_of_type crm:P46_is_composed_of.
      ?frame a <http://murtenannotation.local/ver1/Frame>.
    		$subject rs:PX_main_represents $frame .
    		?frame rs:PX_has_main_representation $subject .
      ?framing a <http://murtenannotation.local/ver1/Framing>.
      ?framing crm:P14_carried_out_by ?__useruri__.
      ?__useruri__ a crm:E39_Actor.

      #creation of frame appellation
      $frame crm:P1_is_identified_by ?frame_appellation . 
      ?frame_appellation a crm:E41_Appellation . 
      ?frame_appellation crm:P2_has_type <http://www.researchspace.org/resource/system/vocab/resource_type/primary_appellation> . 
      ?frame_appellation crm:P190_has_symbolic_content ?frame_appellation_value.

      #creation of framing appellation
      $framing crm:P1_is_identified_by ?framing_appellation . 
      ?framing_appellation a crm:E41_Appellation . 
      ?framing_appellation crm:P2_has_type <http://www.researchspace.org/resource/system/vocab/resource_type/primary_appellation> . 
      ?framing_appellation crm:P190_has_symbolic_content ?framing_appellation_value.

  } WHERE {
      BIND(IRI(IF(STRSTARTS(STR($value), CONCAT(STRBEFORE(STR($value), "/frame/"), "/frame/")), STRBEFORE(STR($value), "/frame/"), STR($value))) AS ?E22orE25)
      BIND(STRUUID() as ?frame_UUID).
      BIND(URI(CONCAT(str(?E22orE25), str("/frame/"), ?frame_UUID)) as ?frame).
      BIND(URI(CONCAT(STR($frame), "/primary_appellation") ) as $frame_appellation)
      BIND(URI(CONCAT(str(?frame), str("/framing/"))) as ?framing).
      BIND(URI(CONCAT(STR($framing), "/primary_appellation") ) as $framing_appellation)
      BIND(CONCAT('frame-', ?frame_UUID) as ?frame_appellation_value)
      BIND(CONCAT('framing-', ?frame_UUID) as ?framing_appellation_value)
  }`,
  selectPattern: `SELECT ?value WHERE {
    $subject <http://www.ics.forth.gr/isl/CRMdig/L49_is_primary_area_of> ?value .
  }`,
});

export const ImageRegionFields: ReadonlyArray<Forms.FieldDefinition> = [
  ImageRegionType,
  ImageRegionLabel,
  ImageRegionBoundingBox,
  ImageRegionValue,
  ImageRegionViewport,
  ImageRegionIsPrimaryAreaOf,
];

export const ImageRegionFieldsRecursiveAnnotation: ReadonlyArray<Forms.FieldDefinition> = [
  ImageRegionType,
  ImageRegionLabel,
  ImageRegionBoundingBox,
  ImageRegionValue,
  ImageRegionViewport,
  ImageRegionIsPrimaryAreaOf,
  ImageRegionIsRepresentationOfFrame,
];
