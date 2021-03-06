// Copyright (C) 2017 Peter Robinson and the Smart Contract Application Browser contributors.
package com.nelladragon.common;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;

import com.nelladragon.scab.R;

/**
 * Display help information.
 */
public class HelpActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_help);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == android.R.id.home) {
            // This ID represents the Home or Up button.
            // Rather than trying to navigate to the "parent", just finish this activity, which will
            // return control to the "parent" activity.
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

}
