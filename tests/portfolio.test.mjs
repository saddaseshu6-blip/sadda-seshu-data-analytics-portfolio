import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {profile,projects,filterProjects} from '../src/profile.js';
test('six unique case studies have complete content and available previews',()=>{assert.equal(projects.length,6);assert.equal(new Set(projects.map(p=>p.id)).size,6);for(const p of projects){for(const key of ['name','description','overview','result','evidence','kind'])assert.ok(p[key]);for(const f of [p.image,...p.gallery])assert.ok(existsSync(new URL('../public/images/'+f,import.meta.url)),f)}});
test('technology filters return matching projects and support no results',()=>{assert.equal(filterProjects('All').length,6);assert.equal(filterProjects('Excel').length,2);assert.equal(filterProjects('Power BI').length,4);assert.equal(filterProjects('SQL').length,5);assert.equal(filterProjects('unknown').length,0);for(const p of filterProjects('Tableau'))assert.ok(p.tools.includes('Tableau'))});
test('contact and resume downloads are present',()=>{assert.equal(profile.phone,'8688690960');assert.match(profile.email,/@/);for(const ext of ['pdf','docx'])assert.ok(existsSync(new URL('../public/resume/Sadda_Seshu_Resume.'+ext,import.meta.url)))});
